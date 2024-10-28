# Catkin Workspace

This project sets up a ROS Noetic workspace using `catkin_make`. Follow the instructions below to install ROS Noetic and configure your workspace.

## Prerequisites

- **Operating System:** Ubuntu 20.04 or compatible  
- **Required Dependencies:** ROS Noetic  

Make sure your system is ready for ROS Noetic. Check the official installation guide here:  
[ROS Noetic Installation - Ubuntu](https://wiki.ros.org/noetic/Installation/Ubuntu)

---

## Installation

### Step 1: Install ROS Noetic

Follow the [official ROS installation guide](https://wiki.ros.org/noetic/Installation/Ubuntu) to install ROS Noetic. 

Ensure you run the following command after installation to source ROS properly:

```bash
source /opt/ros/noetic/setup.bash && catkin_make
