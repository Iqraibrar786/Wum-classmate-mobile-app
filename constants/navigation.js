import AttachfileBottomSheet from "../app/attachfile";

export const navigationRoutes = {
  // Auth routes
  SPLASH: '/splash',
  ONBOARDING1: '/onboarding1',
  ONBOARDING2: '/onboarding2',
  LOGIN: '/login',
  SIGNUP: '/signup',
  FORGOTPASS: '/forgotpass',
  RESETPASS: '/resetpass',
  OTP: '/otp',
  VERIFIED: '/verified',

  // Main routes
  HOME: '/home',
  CLASSROOM: '/classroom',
  CREATECLASS: '/createclass',
  JOINCLASS: '/joinclass',
  CLASSINFO: '/classinfo',

  // Tab routes
  ANNOUNCEMENT: '/announcement',
  ASSIGNING: '/assigning',
  ADDPERSON: '/addperson',
  PROFILE: '/profile',

  // Other routes
  EDITPROFILE: '/editprofile',
  CHANGEPASSWORD: '/change-password',
  NOTIFICATION: '/notification',
  SETTINGS: '/settings',
  HELP: '/help',
  OFFLINEFILES: '/offlinefiles',
  FOLDER: '/folder',
  JOINCREATE: '/joincreate',
  CARDINFO: '/cardinfo',
  CREATEWORK: '/creatework',
  ASSIGNQUIZ: '/assignquiz',
  POSTSCREEN: '/postscreen',
  TOPICCREATE: '/topiccreate',
  ATTACHMENTS: '/attachments',
  ATTACHFILEBOTTOMSHEET: '/attachfile',
  REUSEPOST: '/reusepost',
  POSTSCREEN: '/postscreen',
};

export const useNavigation = (router) => {
  return {
    goToLogin: () => router.push(navigationRoutes.LOGIN),
    goToHome: () => router.push(navigationRoutes.HOME),
    goToSignup: () => router.push(navigationRoutes.SIGNUP),
    goToClassroom: () => router.push(navigationRoutes.CLASSROOM),
    goToEditProfile: () => router.push(navigationRoutes.EDITPROFILE),
    goToAnnouncement: () => router.push(navigationRoutes.ANNOUNCEMENT),
    goToAttachments: () => router.push(navigationRoutes.ATTACHMENTS),
    goToOTP: () => router.push(navigationRoutes.OTP),
    goToVerified: () => router.push(navigationRoutes.VERIFIED),
    goToForgotPass: () => router.push(navigationRoutes.FORGOTPASS),
    goToResetPass: () => router.push(navigationRoutes.RESETPASS),
    goToAttachfileBottomSheet: () => router.push(navigationRoutes.ATTACHFILEBOTTOMSHEET),
    goToReusePost: () => router.push(navigationRoutes.REUSEPOST),
    goToPostScreen: () => router.push(navigationRoutes.POSTSCREEN),
  };
};
