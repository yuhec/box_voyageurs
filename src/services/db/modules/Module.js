import localforage from 'localforage'
import axios from '@/services/axios'

export class Module {
  constructor ({api_path, lazy_loading, load_on_get}) {
    this.api_path = api_path
    this.load_on_get = load_on_get
    this.db = localforage.createInstance({
      name: api_path,
      driver: [localforage.LOCALSTORAGE, localforage.INDEXEDDB, localforage.WEBSQL,],
    });

    if (!lazy_loading) {
      this.load_elements()
    }
  }


  // GET

  get_element_by_id (id, params, load_on_get) {
    return new Promise(async (resolve, reject) => {
      try {

        if (load_on_get != null) {
          if (load_on_get) {
            await this.load_element_by_id(id, params)
          }
        }
        else if (this.load_on_get) {
          await this.load_element_by_id(id, params)
        }

        let element = await this.db.getItem(id)
        resolve(element)
      } catch (e) {
        reject(e)
      }
    })
  }

  get_elements_ids (ids, load_on_get) {
    return new Promise(async (resolve, reject) => {
      try {
        if (load_on_get != null) {
          if (load_on_get) {
            await this.load_elements({ids: ids})
          }
        }
        else if (this.load_on_get) {
          await this.load_elements({ids: ids})
        }

        let elements = []
        await this.db.iterate((value, key) => {
          if (elements.length < ids.length) {

            if (ids.includes(key)) {
              elements.push(value)
            }

          } else {
            return true
          }
        })

        resolve(elements)
      } catch (e) {
        reject(e)
      }
    })
  }

  get_all_elements (load_on_get) {
    return new Promise(async (resolve, reject) => {
      try {
        if (load_on_get != null) {
          if (load_on_get) {
            await this.load_elements()
          }
        }
        else if (this.load_on_get) {
          await this.load_elements()
        }

        let elements = []

        await this.db.iterate((value) => {
          elements.push(value)
        })

        resolve(elements)
      } catch (e) {
        reject(e)
      }
    })
  }

  get_all_elements_ids (load_on_get) {
    return new Promise(async (resolve, reject) => {
      try {
        if (load_on_get != null) {
          if (load_on_get) {
            await this.load_elements()
          }
        }
        else if (this.load_on_get) {
          await this.load_elements()
        }

        let elements = []

        await this.db.iterate((value) => {
          elements.push(value.id)
        })

        resolve(elements)
      } catch (e) {
        reject(e)
      }
    })
  }


  // LOAD

  load_element_by_id (id, params) {
    return new Promise(async (resolve, reject) => {
      try {
        let element = (await axios.get('/' + this.api_path + '/' + id, {params: params})).data.data
        await this.db.setItem(element.id, element)
        resolve(element.id)
      } catch (e) {
        reject(e)
      }

    })
  }

  load_elements (params) {
    return new Promise(async (resolve, reject) => {
      try {
        let elements = (await axios.get('/' + this.api_path, {params: params})).data.data
        await Promise.all(elements.map(async element => {
          await this.db.setItem(element.id, element)
        }))
        resolve(elements.map(element => { return element.id }))
      } catch (e) {
        reject(e)
      }
    })
  }

  // MANAGE

  create_element (element) {
    return new Promise(async (resolve, reject) => {
      try {
        let response = (await axios.post('/' + this.api_path, element)).data.data
        await this.db.setItem(response.id, response)
        resolve(response)
      } catch (e) {
        reject(e)
      }

    })
  }

  update_element (element) {
    return new Promise(async (resolve, reject) => {
      try {
        let response = (await axios.put('/' + this.api_path + '/' + element.id,
          element)).data.data
        await this.db.setItem(response.id, response)
        resolve(response)
      } catch (e) {
        reject(e)
      }

    })
  }

  delete_element (element) {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await axios.delete('/' + this.api_path + '/' + element.id)
        await this.db.removeItem(element.id)
        resolve(response)
      } catch (e) {
        reject(e)
      }
    })
  }
}
