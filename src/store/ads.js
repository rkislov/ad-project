export default {
  state: {
    ads: [
      {
        title: 'firstAd',
        description: 'Hello i am description',
        promo: false,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: '123'
      },
      {
        title: 'secondAd',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: '1234'
      },
      {
        title: 'thirdAd',
        description: 'Hello i am description',
        promo: true,
        imageSrc: 'https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg',
        id: '12345'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = 'aasdasdas'
      commit('createAd', payload)
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
