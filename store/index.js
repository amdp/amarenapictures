export const state = () => ({
  video: [],
  videoall: [],
  brand: [],
  edit: false
})

export const getters = {}

export const mutations = {
  setVideo: (state, payload) => {
    state.video = payload
  },
  setVideoAll: (state, payload) => {
    state.videoall = payload
  },
  setBrand: (state, payload) => {
    state.brand = payload
  },
  setEdit: (state, payload) => {
    state.edit = payload
  }
}

export const actions = {
  getBrandAction: async function (context) {
    let { data } = await this.$axios.get(process.env.DBURL + '/brand')
    context.commit('setBrand', data)
  },
  getVideoAction: async function (context) {
    let { data } = await this.$axios.get(process.env.DBURL + '/video')
    context.commit('setVideo', data)
  },
  getVideoAllAction: async function (context) {
    let { data } = await this.$axios.get(process.env.DBURL + '/videoall')
    context.commit('setVideoAll', data)
  },
  videoFormAction: async function (context, payload) {
    let { data } = await this.$axios.post(process.env.DBURL + '/video', payload)
    return data
  },
  brandFormAction: async function (context, payload) {
    let { data } = await this.$axios.post(process.env.DBURL + '/brand', payload)
    return data
  },
  contactEmailAction: async function (context, payload) {
    let { data } = await this.$axios.post(process.env.DBURL + '/contactemail', payload)
    return data
  },
  recoverPasswordAction: async function (context, payload) {
    let { data } = await this.$axios.post(
      process.env.DBURL + '/recoverpassword',
      payload
    )
    return data
  },
  imageVideoUploadAction: async function (context, payload) {
    let { data } = await this.$axios.post(
      process.env.DBURL + '/imagevideofile',
      payload.formImageVideoData,
      payload.headers
    )
    if (data.id) return data.id
    else return data.status
  },
  brandUploadAction: async function (context, payload) {
    let { data } = await this.$axios.post(
      process.env.DBURL + '/brandfile',
      payload.formBrandData,
      payload.headers
    )
    if (data.id) return data.id
    else return data.status
  },
  deleteBrandAction: async function (context, payload) {
    let { data } = await this.$axios.post(process.env.DBURL + '/deletebrand', payload)
    return data
  },
  deleteVideoAction: async function (context, payload) {
    let { data } = await this.$axios.post(process.env.DBURL + '/deletevideo', payload)
    return data
  },
}
