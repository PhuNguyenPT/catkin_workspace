execute_process(COMMAND "/home/phu/catkin_ws/build/onrobot/onrobot_rg_control/catkin_generated/python_distutils_install.sh" RESULT_VARIABLE res)

if(NOT res EQUAL 0)
  message(FATAL_ERROR "execute_process(/home/phu/catkin_ws/build/onrobot/onrobot_rg_control/catkin_generated/python_distutils_install.sh) returned error code ")
endif()
