const createRateLimiter = () => {
    const secondLimit = 1;
    const minuteLimit = 20;
    const userLimits = new Map();
  
    // get rid of old entries coz we dont need em
    const cleanupOldEntries = (entries) => {
      const now = Date.now();
      return entries.filter(entry => now - entry < 60000);
    };
  
    return {
      limit: async (userId) => {
        if (!userLimits.has(userId)) {
          userLimits.set(userId, []);
        }
  
        const userEntries = userLimits.get(userId);
        const now = Date.now();
        const updatedEntries = cleanupOldEntries(userEntries);
  
        // check if we're over the limits
        const lastSecond = updatedEntries.filter(entry => now - entry < 1000).length;
        const lastMinute = updatedEntries.length;
  
        if (lastSecond >= secondLimit || lastMinute >= minuteLimit) {
          // uh oh, too many requests!
          throw new Error('Rate limit exceeded');
        }
  
        // add this request to the list
        updatedEntries.push(now);
        userLimits.set(userId, updatedEntries);
      },
    };
  };
  
  module.exports = { createRateLimiter };