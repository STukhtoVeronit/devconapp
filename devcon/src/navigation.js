import { Navigation } from 'react-native-navigation'

export const goToAuth = () => Navigation.setRoot({
    root: {
        bottomTabs: {
            id: 'BottomTabsId',
            children: [
                {
                    component: {
                        name: 'SignIn',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign In',
                                icon: require('./signIn.png')
                            }
                        }
                    },
                },
                {
                    component: {
                        name: 'SignUp',
                        options: {
                            bottomTab: {
                                fontSize: 12,
                                text: 'Sign Up',
                                icon: require('./signUp.png')
                            }
                        }
                    },
                },
            ],
        }
    }
});

export const goHome = () => Navigation.setRoot({
    root: {
        stack: {
            id: 'App',
            children: [
                {
                    component: {
                        name: 'Home',
                    }
                }
            ],
        }
    }
});

export const goHomePage = (page = "Home") => Navigation.setRoot({
    root: {
        sideMenu: {
	        left: {
		        component: {
		            name: "LeftDrawer"
            }
	        },
	        center: {
		        stack: {
			        options: {},
			        children: [{
				        component: {
					          name: page,
                }
			        }]
		        }
	        },
	        right: {
		        component: {
			        name: "RightDrawer"
            }
	        }
        }
    }
});