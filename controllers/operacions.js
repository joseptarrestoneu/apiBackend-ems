const ActuacioModel = require('../models/actuacio')
const UserModel = require('../models/user')
const UsuariModel = require('../models/usuari')

const operations = async function (req, res, next) {

    // Count actuacions planificades
    const numActuacions = await ActuacioModel.count()
    // Count actuacions pendents
    const numActuacionsPendents = await ActuacioModel.count({ validada: false || undefined })
    // Count actuacions passades
    const numActuacionsPassades = await ActuacioModel.count({ dataAlta: { $gt: new Date() }, validada: false || undefined })
    // Count actuacions validades
    const numActuacionsValidades = await ActuacioModel.count({ validada: true })
    // Count time actuacions planificades
    const actuacioTimePlanificada = await ActuacioModel.find({ time: { $ne: undefined } })
    let arrayTimePlanificada = actuacioTimePlanificada.map(element => {
        return element.time
    })
    let timeActuacionsPlanificades = 0
    for (let i = 0; i < arrayTimePlanificada.length; i++) {
        timeActuacionsPlanificades = timeActuacionsPlanificades + arrayTimePlanificada[i]
    }
    // Count time actuacions pendents
    const actuacioTimePendent = await ActuacioModel.find({ time: { $ne: undefined }, validada: false || undefined })
    let arrayTimePendent = actuacioTimePendent.map(element => {
        return element.time
    })
    let timeActuacionsPendents = 0
    for (let i = 0; i < arrayTimePendent.length; i++) {
        timeActuacionsPendents = timeActuacionsPendents + arrayTimePendent[i]
    }
    // Count time actuacions passades
    const actuacioTimePassades = await ActuacioModel.find({ time: { $ne: undefined }, validada: false || undefined, dataAlta: { $lt: new Date() } })
    let arrayTimePassades = actuacioTimePassades.map(element => {
        return element.time
    })
    let timeActuacionsPassades = 0
    for (let i = 0; i < arrayTimePassades.length; i++) {
        timeActuacionsPassades = timeActuacionsPassades + arrayTimePassades[i]
    }
    // Count time actuacions validades
    const actuacioTimeValidades = await ActuacioModel.find({ time: { $ne: undefined }, validada: true })
    let arrayTimeValidades = actuacioTimeValidades.map(element => {
        return element.time
    })
    let timeActuacionsValidades = 0
    for (let i = 0; i < arrayTimeValidades.length; i++) {
        timeActuacionsValidades = timeActuacionsValidades + arrayTimeValidades[i]
    }
    // Count active user
    const numActiveUser = await UserModel.count({ dataBaixa: undefined })
    // Count active usuari
    const numActiveUsuari = await UsuariModel.count({ dataBaixa: undefined })
    res.json(
        {
            numActuacions,
            numActuacionsPendents,
            numActuacionsPassades,
            numActuacionsValidades,
            timeActuacionsPlanificades,
            timeActuacionsPendents,
            timeActuacionsPassades,
            timeActuacionsValidades,
            numActiveUser,
            numActiveUsuari
        }
    )
}

module.exports = { operations }
