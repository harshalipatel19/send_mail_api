const db = require('../model')
const email = db.email
const mail = require('../helper/sendmail')


const createuser= async (req,res)=>{
    const {UserName,EmailId} = req.body
    let mailsubject = "confirmation mail";
    const content = '<p> hi <br>' + UserName+  ', \
    this is your confirmation  mail.';
    mail.sendEmail(EmailId,mailsubject,content);
    const data = await email.create({UserName,EmailId})
    return res.status(201).json({messgae:"mail send successfully"});
}


module.exports ={
    createuser
 
}