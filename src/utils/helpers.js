/**
 * Helpers to share among components.
 */

/**
 * Gets a single value from the local storage.
 *
 * @param {string} fieldName The property to get from the local storage.
 *
 * @return {string} The local storage value
 */
export const getLocalData = (fieldName) => {
    return window.localStorage.getItem(fieldName)
  }
  
  /**
   * Sets a single value into the local storage.
   *
   * @param {string} fieldName The property to set in the local storage,
   * @param {string} value The value to set in the local storage.
   */
  export const setLocalData = (fieldName, value) => window.localStorage.setItem(fieldName, value)
  