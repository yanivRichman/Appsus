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
        sentAt: getDate(1621234930594),
        to: 'yaronB@ca.com',
    },
    {
        id: 'e102',
        name: 'Matan Crispel',
        subject: 'Dropbox!!!',
        body: "Hi, don't forget DO NOT COPY YOUR GIT FOLDER TO THE DROPBOX Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius. ",
        isRead: true,
        sentAt: getDate(1621133930594),
        to: 'matanB@ca.com',
    },
    {
        id: 'e103',
        name: 'Adina Zwebner',
        subject: 'Sprint3 update',
        body: "Hi Revital and Yaniv, Please don't forget at 21:00 today a zoom meating and Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius.",
        isRead: false,
        sentAt: getDate(1581133930594),
        to: 'adinaZ@ca.com',
    },
    {
        id: 'e104',
        name: 'Ori Shemla',
        subject: 'Data is a function that ',
        body: 'Hi Did you know that Data is a function that return an object ? or that Data is a function that return an object ? and also that Data is a function that return an object ?',
        isRead: true,
        sentAt: getDate(1581133930594),
        to: 'oriSH@ca.com',
    },
    {
        id: 'e105',
        name: 'Yaron Biton',
        subject: 'Sprint3 review',
        body: 'Hi Revital and Yaniv, i have been review your sprint 3 and i hope that Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius. ',
        isRead: false,
        sentAt: getDate(1561133930594),
        to: 'yaronB@ca.com',
    },
    {
        id: 'e106',
        name: 'Matan Crispel',
        subject: 'Dropbox!!!',
        body: "Hi, don't forget DO NOT COPY YOUR GIT FOLDER TO THE DROPBOX Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius. ",
        isRead: true,
        sentAt: getDate(1561133930594),
        to: 'matanB@ca.com',
    },
    {
        id: 'e107',
        name: 'Adina Zwebner',
        subject: 'Sprint3 update',
        body: "Hi Revital and Yaniv, Please don't forget at 21:00 today a zoom meating and Lorem ipsum, dolor sit amet consectetur adipisicing elit.Quae quod, id fugit quibusdam doloremque maiores harum tempora ipsam consectetur eos nobis quos totam corrupti laborum eligendi! Voluptate praesentium iste eius.",
        isRead: false,
        sentAt: getDate(1551133930594),
        to: 'adinaZ@ca.com',
    },
    {
        id: 'e108',
        name: 'Ori Shemla',
        subject: 'Data is a function that ',
        body: 'Hi Did you know that Data is a function that return an object ? or that Data is a function that return an object ? and also that Data is a function that return an object ?',
        isRead: true,
        sentAt: getDate(1551133930594),
        to: 'oriSH@ca.com',
    },
];

const loggedinUser = { email: 'user@appsus.com', fullname: 'Mahatma Appsus' };

_createmails();

export const mailService = {
    query,
    remove,
    save,
    getEmptyMail,
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

function getEmptyMail() {
    return {
        id: '',
        subject: '',
        body: '',
        isRead: false,
        name: 'Yaniv Richman',
        sentAt: getCurentDate(),
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

function getDate(time) {
    const day = new Date(time).getDate();
    const month = parseInt(new Date(time).getMonth()) + 1;
    const year = new Date(time).getFullYear();
    if (year < 2021) {
        var fullDate = day + '/' + month + '/' + year;
    } else {
        const monthNames = [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ];
        const monthStr = monthNames[month];
        var fullDate = monthStr + ',' + day;
    }
    return fullDate;
}

function getCurentDate() {
    const currTime = new Date().toLocaleString('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
      })
      return currTime;
}