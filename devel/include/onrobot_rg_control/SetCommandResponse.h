// Generated by gencpp from file onrobot_rg_control/SetCommandResponse.msg
// DO NOT EDIT!


#ifndef ONROBOT_RG_CONTROL_MESSAGE_SETCOMMANDRESPONSE_H
#define ONROBOT_RG_CONTROL_MESSAGE_SETCOMMANDRESPONSE_H


#include <string>
#include <vector>
#include <memory>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace onrobot_rg_control
{
template <class ContainerAllocator>
struct SetCommandResponse_
{
  typedef SetCommandResponse_<ContainerAllocator> Type;

  SetCommandResponse_()
    : success(false)
    , message()  {
    }
  SetCommandResponse_(const ContainerAllocator& _alloc)
    : success(false)
    , message(_alloc)  {
  (void)_alloc;
    }



   typedef uint8_t _success_type;
  _success_type success;

   typedef std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>> _message_type;
  _message_type message;





  typedef boost::shared_ptr< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> const> ConstPtr;

}; // struct SetCommandResponse_

typedef ::onrobot_rg_control::SetCommandResponse_<std::allocator<void> > SetCommandResponse;

typedef boost::shared_ptr< ::onrobot_rg_control::SetCommandResponse > SetCommandResponsePtr;
typedef boost::shared_ptr< ::onrobot_rg_control::SetCommandResponse const> SetCommandResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}


template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator==(const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator1> & lhs, const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator2> & rhs)
{
  return lhs.success == rhs.success &&
    lhs.message == rhs.message;
}

template<typename ContainerAllocator1, typename ContainerAllocator2>
bool operator!=(const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator1> & lhs, const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator2> & rhs)
{
  return !(lhs == rhs);
}


} // namespace onrobot_rg_control

namespace ros
{
namespace message_traits
{





template <class ContainerAllocator>
struct IsMessage< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> const>
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "937c9679a518e3a18d831e57125ea522";
  }

  static const char* value(const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x937c9679a518e3a1ULL;
  static const uint64_t static_value2 = 0x8d831e57125ea522ULL;
};

template<class ContainerAllocator>
struct DataType< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "onrobot_rg_control/SetCommandResponse";
  }

  static const char* value(const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "bool success\n"
"string message\n"
;
  }

  static const char* value(const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.success);
      stream.next(m.message);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct SetCommandResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::onrobot_rg_control::SetCommandResponse_<ContainerAllocator>& v)
  {
    s << indent << "success: ";
    Printer<uint8_t>::stream(s, indent + "  ", v.success);
    s << indent << "message: ";
    Printer<std::basic_string<char, std::char_traits<char>, typename std::allocator_traits<ContainerAllocator>::template rebind_alloc<char>>>::stream(s, indent + "  ", v.message);
  }
};

} // namespace message_operations
} // namespace ros

#endif // ONROBOT_RG_CONTROL_MESSAGE_SETCOMMANDRESPONSE_H
