import { utilService } from '../../../services/util-service.js';
import { storageService } from '../../../services/async-storage-service.js';

const MAILS_KEY = 'mails';

const gMails = [
    {
        id: 'e101',
        name: 'Yaron Biton',
        subject: 'Sprint3 review',
        body: 'Hi Revital and Yaniv, i have been review your sprint 3 and i hope that Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius. ',
        isRead: false,
        sentAt: 1551133930594,
        to: 'yaronB@ca.com',
    },
    {
        id: 'e102',
        name: 'Matan Crispel',
        subject: 'Dropbox!!!',
        body: 'Hi, don\'t forget DO NOT COPY YOUR GIT FOLDER TO THE DROPBOX Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius. ',
        isRead: true,
        sentAt: 1551134930594,
        to: 'matanB@ca.com',
    },
    {
        id: 'e103',
        name: 'Adina Zwebner',
        subject: 'Sprint3 update',
        body: 'Hi Revital and Yaniv, Please don\'t forget at 21:00 today a zoom meating and Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius.',
        isRead: false,
        sentAt: 1551135930594,
        to: 'adinaZ@ca.com',
    },
    {
        id: 'e104',
        name: 'Google the original',
        subject: 'Job offer',
        body: 'Hi Revital and Yaniv, we are very empressed from your work at sprint 3 and Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius.',
        isRead: true,
        sentAt: 1551136930594,
        to: 'googleOrig@gmail.com',
    },
];

const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' };

_createmails();

export const mailService = {
    query,
    remove,
    save,
    getEmptyCar,
    getById,
};

function query() {
    return storageService.query(MAILS_KEY);
}

function remove(mailId) {
    return storageService.remove(MAILS_KEY, mailId);
}

function save(mail) {
    if (mail.id) return storageService.put(MAILS_KEY, mail);
    else return storageService.post(MAILS_KEY, mail);
}

function getEmptyCar() {
    return {
        id: '',
        subject: '',
        body: '',
    };
}

function getById(mailId) {
    return storageService.get(MAILS_KEY, mailId);
}

function _createmails() {
    let mails = utilService.loadFromStorage(MAILS_KEY);
    if (!mails || !mails.length) {
        mails = gMails;
        utilService.saveToStorage(MAILS_KEY, mails);
    }
    return mails;
}

// function _createMail(subject, body) {
//     const mail = {
//         id: utilService.makeId(),
//         subject,
//         body,
//     };
//     return mail;
// }
