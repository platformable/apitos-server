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

      //Titulo 
      doc.font('Helvetica-Bold').fontSize(26).text(pdfData.pdfTitle);
      doc.fontSize(16).fillColor('gray').text(pdfData.pdtSubtitle);
      doc.moveDown()
      //Subtitle
      doc.fontSize(23).fillColor('black').text('0 Intro',{fontWeight: 'bold'})
      doc.moveDown()
      //SectionTitle
      doc.fontSize(17).fillColor('black').text('0.1 Abstract',{fontWeight: 'bold'})
      //paragraph
      doc.font('Helvetica').fontSize(11).text(pdfData.abstractText,{align:'justify'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('0.2 Legal notice & Disclaimer',{fontWeight: 'bold'})
      doc.font('Helvetica').fontSize(11).text(pdfData.legalAndDisclaimer,{align:'justify'})
      
      /* const text = 'This is some sample text'; // sample text
      const textSize = doc.widthOfString(text); // calculate the width of the text
      const lineHeight = 50; // set the height of the line
      const pageHeight = doc.page.height; // get the height of the page
      
      doc.text(text, 60, pageHeight  - lineHeight); 
      doc.moveTo(60, pageHeight - lineHeight) 
         .lineTo(250, pageHeight  - lineHeight )
         .stroke();  */
      // FOOTNOTE
      const footnoteText1 = '1 See : https://op.europa.eu/en/publication-detail/-/publicatio7a88b/language-en ';
      const footnoteTextHeight = doc.heightOfString(footnoteText1);
      const footnoteY = doc.page.height - doc.page.margins.bottom - footnoteTextHeight - 10;
      doc.lineTo(250, footnoteY - 5).stroke();
      doc.fontSize(7).text(footnoteText1, {
        lineBreak: true,
        align: 'left',
        baseline: 'bottom',
        // Position the text at the calculated Y coordinate
        // and indent it to the right by 10 points
        y: footnoteY,
        continued: true,
      }).text(' ', {
        continued: false,
      });

      
      doc.addPage();
      doc.font('Helvetica-Bold').fontSize(23).fillColor('black').text('1 Preamble',{fontWeight: 'bold'})
      doc.moveDown()
      doc.fontSize(17).fillColor('black').text('1.1 Origin of the project',{fontWeight: 'bold'})
      doc.font('Helvetica').fontSize(11).text(pdfData.originOfProjectText,{align:'justify'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('1.2 Our Goals',{fontWeight: 'bold'})
      doc.font('Helvetica').fontSize(11).text(pdfData.ourGoals,{align:'justify'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('1.3 Mutual commitment and full agreement',{fontWeight: 'bold'})
      doc.font('Helvetica').fontSize(11).text(pdfData.mutualCommitment,{align:'justify'})
      const footnoteText2 = '2 APIToS-CC project : https://opencollective.com/di-grants/projects/apitos-cc ';
      const footnoteTextHeight2 = doc.heightOfString(footnoteText2);
      const footnoteY2 = doc.page.height - doc.page.margins.bottom - footnoteTextHeight2 - 10;
      doc.lineTo(250, footnoteY2 - 5).stroke();
      doc.fontSize(7).text(footnoteText2, {
        lineBreak: true,
        align: 'left',
        baseline: 'bottom',
        // Position the text at the calculated Y coordinate
        // and indent it to the right by 10 points
        y: footnoteY2,
        continued: true,
      }).text(' ', {
        continued: false,
      });

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
