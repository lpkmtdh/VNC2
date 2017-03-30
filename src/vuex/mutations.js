
const titleMap = {
  "standard":"布线标准"
  ,"check":"布线任务"
  ,"history":"历史记录"
};
const mutations = {
    //设置当前页面名字
    setTitleName(state, name) {
        state.head.title = titleMap[name.toLowerCase()];
    }
    ,setStandardDeailImgMaxWidth(state,width){
        state.standardDetal.ImgMaxWidth = width;
    }
}
export default mutations
