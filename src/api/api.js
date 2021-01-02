import axios from 'axios'

const baseURL = 'http://163.13.127.156:8088/api'
// const baseURL = '/api'

const Request = axios.create({
  baseURL: baseURL,
  withCredentials: true,
})

export const apiBuilding = () => Request.get('/building')

export const apiRoomAirQualityValue = (room_id, obj_name) =>
  Request.get(`/room/${room_id}/${obj_name}/last`)

export const apiRoomAirQualityChart = (room_id, obj_name) =>
  Request.get(`/room/${room_id}/${obj_name}/range`)

export const apiRoomAlter = (room_id) => Request.get(`/room/${room_id}/alert`)
