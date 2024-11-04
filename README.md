# Catkin Workspace

This project sets up a ROS Noetic workspace using `catkin_make`. Follow the instructions below to install ROS Noetic and configure your workspace.

## Prerequisites

- **Operating System:** Ubuntu 20.04 or compatible  
- **Required Dependencies:** ROS Noetic  

Make sure your system is ready for ROS Noetic. Check the official installation guide here:  
[ROS Noetic Installation - Ubuntu](https://wiki.ros.org/noetic/Installation/Ubuntu)

---

## Installation

### Step 1: Install Submodules

Git clone submodules

```bash
cd ~/catkin_workspace/src
git clone https://github.com/PhuNguyenPT/roboticsgroup_upatras_gazebo_plugins.git
git clone https://github.com/PhuNguyenPT/ROS-TCP-Endpoint.git
git clone https://github.com/PhuNguyenPT/universal_robot.git
git clone https://github.com/PhuNguyenPT/ur_msgs.git
git clone https://github.com/PhuNguyenPT/moveit_msgs.git
```

### Step 2: Install ROS Noetic

Follow the [official ROS installation guide](https://wiki.ros.org/noetic/Installation/Ubuntu) to install ROS Noetic. 

Ensure you run the following command after installation to source ROS properly:

```bash
cd ~/catkin_workspace
source /opt/ros/noetic/setup.bash && catkin_make
```
