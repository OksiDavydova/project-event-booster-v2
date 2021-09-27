const API_KEY = "vUlU4BB7NuakA06DxGebwYsl0aXUn0iA";
const BASE_URL = "https://app.ticketmaster.com/discovery/v2";

const apiService = {
  async fetchEvent(event, page, country, size = 24) {
    const response = await fetch(
      `${BASE_URL}/events?countryCode=${country}&keyword=${event}&page=${page}&size=${size}&locale=*&apikey=${API_KEY}`
    );
    const events = await response.json();
    return events;
  },

  async fetchEventById(id) {
    try {
      const response = await fetch(
        `${BASE_URL}/events.json?&apikey=${API_KEY}&locale=*&id=${id}`
      );
      const ev = await response.json();
      return ev;
    } catch (error) {
      return error;
    }
  },

  async fetchByEventAndCountry(event, country, page = 0, size = 24) {
    try {
      const response = await fetch(
        `${BASE_URL}/events.json?countryCode=${country}&keyword=${event}&page=${page}&size=${size}&locale=*&apikey=${API_KEY}`
      );
      const events = await response.json();
      return events;
    } catch (error) {
      return error;
    }
  },

  async fetchByCountry(country, page = 0, size = 24) {
    try {
      const response = await fetch(
        `${BASE_URL}/events.json?countryCode=${country}&page=${page}&size=${size}&locale=*&apikey=${API_KEY}`
      );
      const events = await response.json();
      return events;
    } catch (error) {
      return error;
    }
  },

  async fetchByEvent(event, page = 0) {
    try {
      const response = await fetch(
        `${BASE_URL}/events.json?keyword=${event}&page=${page}&size=24&locale=*&apikey=${API_KEY}`
      );
      const events = await response.json();
      return events;
    } catch (error) {
      return error;
    }
  },
};

export default apiService;
// CQP9dthjPXqIe7ApjGu3SzKFu5V4QuaK
// vUlU4BB7NuakA06DxGebwYsl0aXUn0iA
