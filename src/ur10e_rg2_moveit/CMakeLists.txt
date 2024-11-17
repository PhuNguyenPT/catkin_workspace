cmake_minimum_required(VERSION 3.1.3)
project(ur10e_rg2_moveit)

find_package(catkin REQUIRED COMPONENTS
  rospy
  std_msgs
  geometry_msgs
  moveit_msgs
  message_generation
)

## Declare ROS messages
add_message_files(
  FILES
  Ur10eMoveitJoints.msg
  Ur10eTrajectory.msg
)

## Generate added messages
generate_messages(
  DEPENDENCIES
  std_msgs
  geometry_msgs
  moveit_msgs
)

## Declare a catkin package
catkin_package(
  CATKIN_DEPENDS message_runtime
)

## Install directories
install(DIRECTORY launch DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
  PATTERN "setup_assistant.launch" EXCLUDE)
install(DIRECTORY config DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION})
