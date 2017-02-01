import {
  StyleSheet,
  Platform
} from 'react-native';
export default Styles = StyleSheet.create({
  container: {
    backgroundColor:'#F4F4F4',
    flex:1,


  },
  SingleMain: {
    flexDirection:'row',
    margin:10,

      flexWrap:'wrap',
      height:220,
      backgroundColor:'#fff'
  },
  excerpt: {
    height: 100,
    marginTop:20,
    flexWrap:'wrap',

  },
  span : {
      flexDirection:'row',
  },
  title:{
    fontSize:16,
    fontWeight:'bold',
    paddingBottom:5
  },
  moreInfo: {
    flexDirection:'row',

  }
})
