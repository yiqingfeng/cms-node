module.exports = {
    appenders: {
        out: {
            type: 'console'
        },
        access: {
            type: 'dateFile',
            filename: 'logs/access/access',
            pattern: '-dd--hh.log',
            alwaysIncludePattern: true
        },
        system: {
            type: 'dateFile',
            filename: 'logs/system/system',
            pattern: '-dd.log',
            alwaysIncludePattern: true
        },
        database: {
            type: 'dateFile',
            filename: 'logs/database/database',
            pattern: '-dd.log',
            alwaysIncludePattern: true
        },
        ERROR: {
            type: 'dateFile',
            filename: 'logs/errors/error',
            pattern: '-MM-dd.log',
            alwaysIncludePattern: true
        }
    },
    categories: {
        default: {
            appenders: ['out'],
            level: 'info'
        },
        access: {
            appenders: ['access'],
            level: 'info',
        },
        system: {
            appenders: ['system'],
            level: 'info',
        },
        database: {
            appenders: ['database'],
            level: 'info',
        },
        ERROR: {
            appenders: ['ERROR'],
            level: 'error',
        }
    },
};
