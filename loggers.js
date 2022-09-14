function loggers(log,type = 'log'){
  console[type](log);
}

export const TYPE_LOG = 'warn';

export default loggers;