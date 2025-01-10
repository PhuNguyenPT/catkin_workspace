cmake_minimum_required(VERSION 3.1.3)
project(ur10e_rg2_moveit)

find_package(catkin REQUIRED COMPONENTS
  rospy
  std_msgs
  geometry_msgs
  moveit_msgs
<<<<<<< HEAD
  ros_tcp_endpoint
  message_generation
  controller_manager
  roslaunch
  trajectory_msgs
=======
  message_generation
>>>>>>> 05df019d9a56448a206d9998185cc498bbc5d132
)

## Declare ROS messages
add_message_files(
  FILES
  Ur10eMoveitJoints.msg
  Ur10eTrajectory.msg
)
<<<<<<< HEAD
add_service_files(DIRECTORY srv)
=======
>>>>>>> 05df019d9a56448a206d9998185cc498bbc5d132

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
<<<<<<< HEAD

catkin_install_python(PROGRAMS
  script/mover.py
  script/trajectory_subscriber.py
  script/sim_real_pnp.py
  DESTINATION ${CATKIN_PACKAGE_BIN_DESTINATION}
)
=======
>>>>>>> 05df019d9a56448a206d9998185cc498bbc5d132

install(DIRECTORY launch DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION}
  PATTERN "setup_assistant.launch" EXCLUDE)
install(DIRECTORY config DESTINATION ${CATKIN_PACKAGE_SHARE_DESTINATION})