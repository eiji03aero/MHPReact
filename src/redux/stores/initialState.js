const initialState = {
  app: {
    redirectPath: ''
  },
  colors: [
    { 
      color: '#004080',
      title: "favorite blue",
      rating: 3,
      id: "2345"
    },
    { 
      color: '#eee',
      title: "geeky grey",
      rating: 5,
      id: "2347"
    },
    { 
      color: '#0096ce',
      title: "great blue",
      rating: 5,
      id: "2348"
    }
  ],
  wikis: [
    {
      id: '098765',
      title: 'osakabe',
      body: 'koreha iine'
    }
  ],
  widgets: {
    addColorFormIsOpen: false
  },
  welcome_page: {
    message: ''
  }
}

export default initialState
