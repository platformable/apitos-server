module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/pdf',
     handler: 'pdf.createPdf',
    //  config: {
    //    policies: [],
    //    middlewares: [],
    //  },
    config:{
      auth:false
  }
    },
  ],
};
