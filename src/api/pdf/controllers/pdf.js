'use strict';
//const PDFDocument = require('pdfkit');
const pdfData = require('./pdfData')
const PDFDocument = require("pdfkit-table");

const pdfTitle = 'FACT Licence'
const pdtSubtitle = 'Your API Terms are Fair, Transparent and Trustworthy. It’s a FACT.'
/**
 * A set of functions called "actions" for `pdf`
 */
const table = {
  title: "",
  subtitle: "",
  headers: [ "Title", "URL", "Short Description" ],
  rows: [
    [ `
    `,  `
    `,  `
    ` ],
    [ `
    `,  `
    `,  `
    ` ],

    [ `
    `,  `
    `,  `
    ` ],

  ],
};
module.exports = {
  createPdf: async (ctx, next) => {
    try {
      // ctx.body = 'ok';
      
      const doc = new PDFDocument();

      //Titulo 
      doc.font('Helvetica-Bold').fontSize(26).text(pdfData.pdfTitle);
      doc.fontSize(16).fillColor('gray').text(pdfData.pdtSubtitle);
      doc.moveDown()


      
      //Subtitle‚
      doc.fontSize(23).fillColor('black').text('0 Intro',{fontWeight: 'bold'})

      doc.moveDown()
      //SectionTitle
      doc.fontSize(17).fillColor('black').text('0.1 Abstract',{fontWeight: 'bold'})
      doc.moveDown(0.5)
      //paragraph
      doc.font('Helvetica').fontSize(11).text(pdfData.abstractText,{align:'justify'})
      doc.moveDown(0.5)
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('0.2 Legal notice & Disclaimer',{fontWeight: 'bold'})
      doc.moveDown(0.5)
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
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(pdfData.originOfProjectText,{align:'justify'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('1.2 Our Goals',{fontWeight: 'bold'})
      doc.moveDown(0.5)
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

      doc.moveDown()
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(23).fillColor('black').text('2 Definition',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(`Particular attention has been paid to using a wording that remains accessible and easy to understand, notably for non-lawyers. Nonetheless, the document uses a specific legal vocabulary that must be referred to in this type of document.`,{align:'justify'})
      doc.moveDown()
      doc.list(pdfData.definitionList,{indent:20,align:'justify',lineGap:2})

      doc.moveDown()
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(23).fillColor('black').text(`3 Core API Provider's Commitments`,{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('3.1 Neutrality',{fontWeight: 'bold'})
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(`The Core API Provider understands the importance of providing a neutral infrastructure and commits to being entirely neutral in delivering its services. The Core API Provider will avoid any behaviour that could favour or disadvantage some users (whether organisations or individuals) or fields based on non-objective criteria.
      `,{align:'justify'})
      doc.font('Helvetica').fontSize(11).text(`Although FACT encourages an Open API approach, there may be some objective restrictions that the Core API Provider needs to impose: 
      `,{align:'justify'})

      doc.moveDown()
      doc.list([`Developer access rights. Technical access conditions for developers (identification keys in particular), when present, are detailed in Annexe A (link to user or developer ToS and dedicated documentation).`],{indent:20,align:'justify',lineGap:2})

      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.1.1 Restrictive rights (option)',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).list([`Actors and fields access rights: If there are objective criteria that discriminate against certain users or fields, such as research actors, the precise conditions are listed in Annexe A (actors and fields restriction).`],{indent:20,align:'justify',lineGap:2})

      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.1.2 ShareAlike licence on API Access (option)',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).list([`API Access - Share Alike: The API User is required to maintain the FACT Contract for any API Users’ Products or API Users’ Services provided to their End Users, as described in Article 4.4.`],{indent:20,align:'justify',lineGap:2})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(`The Core API Provider agrees not to impose, any, other restrictions on the access and use of its API.`,{align:'justify'})
      
      
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('3.2 API Access and grant of rights',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(pdfData.apiAccessAndGrantOfRights,{align:'justify'})

      doc.moveDown()
      doc.fontSize(11).list([`(i) to Develop API Users' Products (to “Develop” meaning – in this Article and elsewhere in this Contract – to design, develop, make or have made, and/or produce or have produced API Users' Products in accordance with the API Specification);`],{indent:20,align:'justify',lineGap:2})
      doc.moveDown()
      doc.fontSize(11).list([`(ii) and to Exploit API Users' Products in one or more of the way(s) defined as follows (hereunder collectively referred to as the “Exploitation” of the API Users' Products or to “Exploit” API Users' Products): `],{indent:20,align:'justify',lineGap:2})

      doc.moveDown()
      doc.fontSize(11).list([`a) to Internally Use API Users' Products; (to “Internally Use” meaning – in this Article and elsewhere in this Contract – to install, use and deploy the API Users' Products and to make them available to the API Users' personnel, for use internally by the API Users for the purpose of general business practices but not to offer API Users' Services or for Distribution purposes; `,`b) and to Offer API Users' Services to End Users; `,`c) and to Distribute API Users' Products to End Users;`],{indent:40,align:'justify',lineGap:5})

      doc.moveDown()
      doc.addPage()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('3.3 API Technical Specification Access',{fontWeight: 'bold'})
      doc.moveDown()


      doc.fontSize(14).fillColor('black').text('3.3.1 Continuous access (Source of truth for Interoperability)',{fontWeight: 'bold'})
      doc.moveDown()

      doc.font('Helvetica').fontSize(11).text(pdfData.continuosAccess,{align:'justify'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.3.2 Modifications',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(pdfData.modifications,{align:'justify'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.3.3 Specification Contract',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(pdfData.specificationContract,{align:'justify'})

      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.3.4 CC Zero Licence on specification (by default)',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(`The Core API Provider applies a CC Zero Licence to the Specification (see `,{align:'justify',continued: true}).fillColor('blue').text(`https://creativecommons.org/publicdomain/zero/1.0/legalcode `,{
        link: 'https://creativecommons.org/publicdomain/zero/1.0/legalcode ',
        continued:true

      })
      doc.fillColor('black').text(`for the full text of the licence)`)


      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.3.5 ShareAlike licence on specification (Option)',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(`The Core API Provider could apply a Creative Commons Attribution-ShareAlike 4.0 International Licence to the API Specification (see `,{align:'justify',continued: true}).fillColor('blue').text(`https://creativecommons.org/licenses/by-sa/4.0/legalcode `,{
        link: 'https://creativecommons.org/licenses/by-sa/4.0/legalcode ',
        continued:true

      })
      doc.fillColor('black').text(`for the full text of the Licence).`)

      doc.moveDown()
      doc.addPage()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('3.4 Loyal change policy',{fontWeight: 'bold'})
      doc.moveDown()

      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.4.1 Purpose',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(pdfData.purpose,{align:'justify'})

      doc.moveDown()

      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.4.2 Technical modifications of the API',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text('The Core API Provider commits to:',{align:'justify'})
      doc.moveDown()
      doc.fontSize(11).list([pdfData.technicalModificationsList],{indent:20,align:'justify',lineGap:2})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text('In exceptional cases, the Core API Provider may modify the API to solve security or continuous access issues. In these situations, it will make sure to maintain optimal API compatibility and inform API Users as soon as possible.',{align:'justify'})


      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(14).fillColor('black').text('3.4.3 Contractual modifications',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text([pdfData.contractualModifications],{align:'justify'})

      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('3.5 Ethical Data policy',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(13).fillColor('black').text('3.5.1 Data Policy',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(12).fillColor('black').text('3.5.1.1 GPDR Policy',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(pdfData.gdprPolicy,{align:'justify'})

      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(12).fillColor('black').text('3.5.1.2 Data licence',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(pdfData.dataLicence,{align:'justify'})

      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(11).fillColor('gray').text('3.5.1.2.1 Open data licence (option)',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fillColor('black').fontSize(11).text(`The Core API Provider should combine the Contract together with another licence for the Databases and their contents. In case of multiple sets of different rights, the Core API Provider must specify which rights apply to which contents on the API contractual commitment summary (Annex A).`,{align:'justify'})

      doc.moveDown()
      doc.addPage()
      doc.font('Helvetica-Bold').fontSize(11).fillColor('gray').text('3.5.1.2.2 Commercial data (option)',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).fillColor('black').text(`The reuse of the Database and its contents is subject to compliance with a dedicated commercial licence, which is reproduced in Annex A. Therefore, API Users must comply with this commercial licence before any Distribution of the database or its contents, whether directly or through the Exploitation of API Users' Products.`,{align:'justify'})


      doc.moveDown()
      doc.font('Helvetica-Bold').fontSize(17).fillColor('black').text('3.6 Loyal Output Policy',{fontWeight: 'bold'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(`The Core API Provider does not make any claims regarding API Users' Products (subject to the conditions of use of the database as specified above) as long as the API User complies with the commitments set out in Article 4 of the contract.

      The User API must refrain from engaging in any behaviour that is directly competitive with the Core API Provider, as mentioned in Article 4.4`,{align:'justify'})

      ////*************************************** */
      ////4
      doc.moveDown(2)
      doc.fontSize(23).font('Helvetica-Bold').text("4 API Users' Commitments",)
      doc.moveDown()
      //4.1
      doc.fontSize(17).font('Helvetica-Bold').text('4.1 Strict implementation & implementation of the last Technical Specification',)
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(pdfData['4.1'],{align:'justify'})
      doc.moveDown()
      //4.2
      doc.fontSize(17).font('Helvetica-Bold').text('4.2 FAIR use',)
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(pdfData[`The API User agrees to take responsibility for ensuring that their API Users' Products :`],{align:'justify'})
      doc.moveDown()
      doc.list(pdfData['4.2 list'],doc.x + 20, doc.y, {align:'justify'})
      doc.moveDown()
      doc.font('Helvetica').fontSize(11).text(pdfData['4.2'],doc.x - 20, doc.y,{align:'justify'})
      doc.moveDown()
      //4.3
      doc.fontSize(17).font('Helvetica-Bold').text('4.3 API Attribution – References to the Core API Provider',)
      doc.moveDown()
      //4.3.1
      doc.fontSize(14).font('Helvetica-Bold').text('4.3.1 Attribution requirements',)
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(pdfData['4.3'][1].description,{})
      doc.moveDown()
     //  doc.list([pdfData['4.3'][1][1].slice(0, 23).concat(pdfData['4.3'][1][1].slice(23)), pdfData['4.3'][1][2]], {listType: 'numbered'})
       doc.font('Helvetica').text('1.  ',doc.x + 20, doc.y, {continued: true, indent: -10}).font('Helvetica-Bold').fontSize(11).text(pdfData['4.3'][1][1].slice(0, 23),{continued: true}).font('Helvetica').text(pdfData['4.3'][1][1].slice(23), )
      doc.font('Helvetica').text('2.  ', {continued: true, indent: -10}).font('Helvetica-Bold').fontSize(11).text(pdfData['4.3'][1][2].slice(0, 65),{continued: true}).font('Helvetica').text(pdfData['4.3'][1][2].slice(65), )
      doc.moveDown()
      //4.3.2
      doc.fontSize(14).font('Helvetica-Bold').text('4.3.2 No attribution (option)',doc.x - 20, doc.y,)
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(pdfData['4.3'][2].slice(0,125),{continued: true}).font('Helvetica-Bold').text(pdfData['4.3'][2].slice(125, 213), ).font('Helvetica').text(pdfData['4.3'][2].slice(213), {align: 'justify'})
      doc.moveDown()
      //4.3.3
      doc.fontSize(14).font('Helvetica-Bold').text('4.3.3 Trademark enforcement (option)',)
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(pdfData['4.3'][3],{})
      doc.moveDown()
      //4.4
      doc.fontSize(17).font('Helvetica-Bold').text('4.4 Non-direct competition [Loyal Output Policy +]',)
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(pdfData['4.4'],{})
      doc.moveDown()
      //4.5
      doc.fontSize(17).font('Helvetica-Bold').text('4.5 Share alike  [API Access +]',)
      doc.moveDown(0.5)
      doc.font('Helvetica').fontSize(11).text(pdfData['4.5'],{align: 'justify'})
      doc.moveDown(2)

      //5
      doc.fontSize(23).font('Helvetica-Bold').text("5 Liability and Warranties")
      doc.moveDown(0.5)
      //5.1
      doc.fontSize(17).font('Helvetica-Bold').text('5.1 Limitation on Liability ',)
      doc.moveDown(0.5)
      doc.fontSize(11).font('Helvetica').text(pdfData['5.1'], {align: 'justify'})
      doc.moveDown()
      //5.2
      doc.fontSize(17).font('Helvetica-Bold').text('5.2 Jurisdiction ',)
      doc.moveDown(0.5)
      doc.fontSize(11).font('Helvetica').text(pdfData['5.2'], )
      doc.moveDown()
      //5.3
      doc.fontSize(17).font('Helvetica-Bold').text('5.3 Applicable Law ',)
      doc.moveDown(0.5)
      doc.fontSize(11).font('Helvetica').text(pdfData['5.3'].slice(0, 188), {continued: true}).font('Helvetica-Bold').text(pdfData['5.3'].slice(188, 216), {continued: true}).font('Helvetica').text(pdfData['5.3'].slice(216))
      doc.moveDown()
      //5.4
      doc.fontSize(17).font('Helvetica-Bold').text('5.4 Disclaimer of warranty ',)
      doc.moveDown(0.5)
      doc.fontSize(11).font('Helvetica').text(pdfData['5.4'].slice(0, 673), {align:'justify', continued: true}).font("Helvetica-Bold").text(pdfData['5.4'].slice(673, 774), {continued: true}).font("Helvetica").text(pdfData['5.4'].slice(774))
      doc.moveDown()
      //5.5
      doc.fontSize(17).font('Helvetica-Bold').text('5.5 Term & Termination of the Contract',)
      doc.moveDown(0.5)
      doc.fontSize(11).font('Helvetica').text(pdfData['5.5'], {align:'justify'})
      doc.moveDown()
      //5.6
      doc.fontSize(17).font('Helvetica-Bold').text('5.6 Validity',)
      doc.moveDown(0.5)
      doc.fontSize(11).font('Helvetica').text(pdfData['5.6'], {align:'justify'})
      doc.moveDown(2)

      //6
      doc.addPage()
      doc.fontSize(23).font('Helvetica-Bold').text("6 Annex")
      doc.moveDown()
      //6.1
      doc.fontSize(17).font('Helvetica-Bold').text('6.1 Annexe A: API contractual commitments summary ',{fontWeight: 'bold'})
      doc.moveDown(0.5)
      doc.fontSize(11).font('Helvetica').text(pdfData['6.1'], {align:'justify'})
      doc.moveDown()
      // Table
      doc.table(table)

      //6.2
      doc.fontSize(17).font('Helvetica-Bold').text('6.2 Annexe B: How to Apply These Terms to Your product? ',{fontWeight: 'bold'})
      doc.moveDown(0.5)
      doc.fontSize(11).font('Helvetica').text(pdfData['6.2'], {align:'justify'})
      doc.moveDown()
      doc.moveDown()
      

      
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
