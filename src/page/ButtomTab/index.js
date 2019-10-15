
const ScreenTab = TabNavigator(
    // 配置 tab 路由
    {
        Home: {
            screen: Home
        },
        Mine: {
            screen: Mine
        }
    },
    // 其他配置选项
    {
      tabBarPosition: "bottom"
    }
  );
  
  export default ScreenTab;