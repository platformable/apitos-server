'use strict';
const PDFDocument = require('pdfkit');
const pdfData = require('./pdfData')


const pdfTitle = 'FACT Licence'
const pdtSubtitle = 'Your API Terms are Fair, Transparent and Trustworthy. It’s a FACT.'
/**
 * A set of functions called "actions" for `pdf`
 */

module.exports = {
  createPdf: async (ctx, next) => {
    try {
      // ctx.body = 'ok';
      
      const doc = new PDFDocument();


      doc.font('Helvetica-Bold').fontSize(26).text(pdfData.pdfTitle);
      doc.fontSize(16).fillColor('gray').text(pdfData.pdtSubtitle);
      doc.moveDown()
      doc.fontSize(23).fillColor('black').text('0 Intro',{fontWeight: 'bold'})
      doc.moveDown()
      doc.fontSize(17).fillColor('black').text('0.1 Abstract',{fontWeight: 'bold'})
      doc.font('Helvetica').fontSize(11).text(pdfData.abstractText,{align:'justify'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('0.2 Legal notice & Disclaimer',{fontWeight: 'bold'})
      doc.font('Helvetica').fontSize(11).text(pdfData.legalAndDisclaimer,{align:'justify'})




      ctx.set('Content-Type', 'application/pdf');
      ctx.set('Content-Disposition', 'attachment; filename="archivo.pdf"');
      doc.pipe(ctx.res);
      doc.end();
      console.log("end pdf")
    } catch (err) {
      ctx.body = err;
    }
  }
};
