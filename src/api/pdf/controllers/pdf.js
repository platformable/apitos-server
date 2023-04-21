'use strict';
const PDFDocument = require('pdfkit');
/**
 * A set of functions called "actions" for `pdf`
 */

module.exports = {
  createPdf: async (ctx, next) => {
    try {
      // ctx.body = 'ok';
      console.log("pdf")
      const doc = new PDFDocument();
      doc.fontSize(25).text('Hola, Platformable!');
      ctx.set('Content-Type', 'application/pdf');
      ctx.set('Content-Disposition', 'attachment; filename="archivo.pdf"');
      doc.pipe(ctx.res);
      doc.end();
    } catch (err) {
      ctx.body = err;
    }
  }
};
