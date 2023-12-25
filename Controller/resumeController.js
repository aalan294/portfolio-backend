const path = require('path')
const downloadResume = (req,res)=>{
    fileName = "Aalan sason singarayan's Resume.pdf"
    filePath = path.join(__dirname,'../files/Resume - Google Docs.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename=${fileName}`);
    res.download(filePath,fileName,(err)=>{
        if(err){
            console.log(err.message)
        }
    })
}

module.exports = {downloadResume}