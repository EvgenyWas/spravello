const LOCAL_STORAGE_API = {
    key: {
      tasks: "tasks-data",
    },
    getStorageData() {
      let data = JSON.parse(localStorage.getItem(this.key.tasks));
      return data ? data : [];
    },
    setStorageData(data) {
      localStorage.setItem(this.key.tasks, JSON.stringify(data));
    },
};

export { LOCAL_STORAGE_API };