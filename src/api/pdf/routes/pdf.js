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
    {
      method: 'GET',
      path: '/pdf/:options',
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
