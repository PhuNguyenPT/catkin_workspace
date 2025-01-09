cmake_minimum_required(VERSION 3.1.3)
project(ur10e_rg2_moveit)

find_package(catkin REQUIRED COMPONENTS
  rospy
  std_msgs
  geometry_msgs
  moveit_msgs
  ros_tcp_endpoint
  message_generation
  controller_manager
  roslaunch
  trajectory_msgs
)

## Declare ROS messages
add_message_files(
  FILES
  Ur10eMoveitJoints.msg
  Ur10eTrajectory.msg
)
add_service_files(DIRECTORY srv)

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

catkin_install_python(PROGRAMS
  script/mover.py
  script/trajectory_subscriber.py
  script/sim_real_pnp.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)

install(DIRECTORY launch DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
  PATTERN "setup_assistant.launch" EXCLUDE)
install(DIRECTORY config DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION})