import vue from 'vue'

// 人员列表
const peopleList = params => vue.axios.get(`/personinfo?userid=${params}` )

// 人员详细信息
// const peopleInfo = params => vue.axios.get(`/personinfo/${params.id}/?userid=${params.userid}` )
const peopleInfo = params => vue.axios.get(`/personinfo/${params.id}` )
const exportExcel=params=>vue.axios.get(`/exportexcel?userid=${params}`,{responseType: 'arraybuffer'})
// 搜索人员
const searchPeople = params => vue.axios.get(`/personinfo/search?search=${params.search}&userid=${params.userId} `)
export {
    peopleList,
    peopleInfo,
    searchPeople,
    exportExcel
}