import { AsyncStorage } from 'react-native'
import {
  safetyPeriod,
  estimatedDiagnosisDelay,
  serverBaseUrl as urlPath
} from 'trackcovid-js/config'
import TrackCovid from 'trackcovid-js'

const serverBaseUrl = `https://trackcovid.net${urlPath}`
const checkpointsDBKey = 'CHECKPOINTS'
const useConfirmedDBKey = 'USECONFIRMED'

async function getCheckpoints () {
  const checkpointsString = await AsyncStorage.getItem(checkpointsDBKey) || '[]'
  return JSON.parse(checkpointsString)
}

async function setCheckpoints (checkpointsArr) {
  return AsyncStorage.setItem(checkpointsDBKey, JSON.stringify(checkpointsArr))
}

async function getUseConfirmed () {
  const useConfirmedString = await AsyncStorage.getItem(useConfirmedDBKey) || 'false'
  return JSON.parse(useConfirmedString)
}

async function setUseConfirmed (newVal) {
  return AsyncStorage.setItem(useConfirmedDBKey, JSON.stringify(newVal))
}

const trackCovid = TrackCovid({
  serverBaseUrl,
  safetyPeriod,
  estimatedDiagnosisDelay,
  getCheckpoints,
  setCheckpoints,
  getUseConfirmed,
  setUseConfirmed
})

const {
  hostCheckpoint,
  joinCheckpoint,
  getExposureStatus,
  reportPositive
} = trackCovid

module.exports = {
  hostCheckpoint,
  joinCheckpoint,
  getExposureStatus,
  reportPositive,
  getUseConfirmed,
  setUseConfirmed
}
