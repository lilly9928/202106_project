import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

const sports = [
  {
    label: 'Football',
    value: 'football',
  },
  {
    label: 'Baseball',
    value: 'baseball',
  },
  {
    label: 'Hockey',
    value: 'hockey',
  },
];

const MainTabScreen = ({navigation, route}) => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TestStack') {
            iconName = focused ? 'document' : 'document-outline';
          } else if (route.name === 'HomeStack') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'SettingStack') {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'black',
        inactiveTintColor: 'lightgray',
        showLabel: false,
      }}>
      <Tab.Screen name="TestStack" component={TestStackScreen} />
      <Tab.Screen name="HomeStack" component={HomeStackScreen} />
      <Tab.Screen name="SettingStack" component={SettingStackScreen} />
      <RNPickerSelect
            placeholder={placeholder}
            items={sports}
            onValueChange={value => {
              this.setState({
                favSport0: value,
              });
            }}
            onUpArrow={() => {
              this.inputRefs.firstTextInput.focus();
            }}
            onDownArrow={() => {
              this.inputRefs.favSport1.togglePicker();
            }}
            style={pickerSelectStyles}
            value={this.state.favSport0}
            ref={el => {
              this.inputRefs.favSport0 = el;
            }}
          />
    </Tab.Navigator>
  );
};