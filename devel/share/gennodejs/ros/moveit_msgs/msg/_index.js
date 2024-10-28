
"use strict";

let MoveGroupActionGoal = require('./MoveGroupActionGoal.js');
let ExecuteTrajectoryResult = require('./ExecuteTrajectoryResult.js');
let MoveGroupAction = require('./MoveGroupAction.js');
let PlaceGoal = require('./PlaceGoal.js');
let PickupFeedback = require('./PickupFeedback.js');
let PickupAction = require('./PickupAction.js');
let PickupActionFeedback = require('./PickupActionFeedback.js');
let PickupActionResult = require('./PickupActionResult.js');
let PlaceResult = require('./PlaceResult.js');
let PlaceAction = require('./PlaceAction.js');
let ExecuteTrajectoryGoal = require('./ExecuteTrajectoryGoal.js');
let ExecuteTrajectoryFeedback = require('./ExecuteTrajectoryFeedback.js');
let MoveGroupSequenceActionFeedback = require('./MoveGroupSequenceActionFeedback.js');
let PickupActionGoal = require('./PickupActionGoal.js');
let MoveGroupSequenceFeedback = require('./MoveGroupSequenceFeedback.js');
let ExecuteTrajectoryAction = require('./ExecuteTrajectoryAction.js');
let PickupGoal = require('./PickupGoal.js');
let MoveGroupSequenceResult = require('./MoveGroupSequenceResult.js');
let PlaceFeedback = require('./PlaceFeedback.js');
let ExecuteTrajectoryActionGoal = require('./ExecuteTrajectoryActionGoal.js');
let MoveGroupGoal = require('./MoveGroupGoal.js');
let MoveGroupFeedback = require('./MoveGroupFeedback.js');
let PickupResult = require('./PickupResult.js');
let ExecuteTrajectoryActionFeedback = require('./ExecuteTrajectoryActionFeedback.js');
let MoveGroupActionFeedback = require('./MoveGroupActionFeedback.js');
let MoveGroupSequenceActionResult = require('./MoveGroupSequenceActionResult.js');
let ExecuteTrajectoryActionResult = require('./ExecuteTrajectoryActionResult.js');
let PlaceActionResult = require('./PlaceActionResult.js');
let MoveGroupSequenceActionGoal = require('./MoveGroupSequenceActionGoal.js');
let PlaceActionGoal = require('./PlaceActionGoal.js');
let MoveGroupActionResult = require('./MoveGroupActionResult.js');
let MoveGroupSequenceGoal = require('./MoveGroupSequenceGoal.js');
let MoveGroupResult = require('./MoveGroupResult.js');
let PlaceActionFeedback = require('./PlaceActionFeedback.js');
let MoveGroupSequenceAction = require('./MoveGroupSequenceAction.js');
let LinkScale = require('./LinkScale.js');
let MotionSequenceItem = require('./MotionSequenceItem.js');
let PlannerInterfaceDescription = require('./PlannerInterfaceDescription.js');
let ObjectColor = require('./ObjectColor.js');
let MotionSequenceRequest = require('./MotionSequenceRequest.js');
let ContactInformation = require('./ContactInformation.js');
let MotionPlanRequest = require('./MotionPlanRequest.js');
let TrajectoryConstraints = require('./TrajectoryConstraints.js');
let JointConstraint = require('./JointConstraint.js');
let VisibilityConstraint = require('./VisibilityConstraint.js');
let Constraints = require('./Constraints.js');
let PlanningSceneComponents = require('./PlanningSceneComponents.js');
let CollisionObject = require('./CollisionObject.js');
let AllowedCollisionMatrix = require('./AllowedCollisionMatrix.js');
let OrientationConstraint = require('./OrientationConstraint.js');
let PlanningOptions = require('./PlanningOptions.js');
let MotionPlanDetailedResponse = require('./MotionPlanDetailedResponse.js');
let AttachedCollisionObject = require('./AttachedCollisionObject.js');
let PlanningScene = require('./PlanningScene.js');
let CartesianTrajectoryPoint = require('./CartesianTrajectoryPoint.js');
let BoundingVolume = require('./BoundingVolume.js');
let CostSource = require('./CostSource.js');
let MotionPlanResponse = require('./MotionPlanResponse.js');
let RobotState = require('./RobotState.js');
let PositionConstraint = require('./PositionConstraint.js');
let JointLimits = require('./JointLimits.js');
let MoveItErrorCodes = require('./MoveItErrorCodes.js');
let ConstraintEvalResult = require('./ConstraintEvalResult.js');
let Grasp = require('./Grasp.js');
let LinkPadding = require('./LinkPadding.js');
let CartesianTrajectory = require('./CartesianTrajectory.js');
let KinematicSolverInfo = require('./KinematicSolverInfo.js');
let GenericTrajectory = require('./GenericTrajectory.js');
let DisplayTrajectory = require('./DisplayTrajectory.js');
let PlaceLocation = require('./PlaceLocation.js');
let RobotTrajectory = require('./RobotTrajectory.js');
let WorkspaceParameters = require('./WorkspaceParameters.js');
let GripperTranslation = require('./GripperTranslation.js');
let AllowedCollisionEntry = require('./AllowedCollisionEntry.js');
let OrientedBoundingBox = require('./OrientedBoundingBox.js');
let CartesianPoint = require('./CartesianPoint.js');
let PositionIKRequest = require('./PositionIKRequest.js');
let MotionSequenceResponse = require('./MotionSequenceResponse.js');
let PlannerParams = require('./PlannerParams.js');
let PlanningSceneWorld = require('./PlanningSceneWorld.js');
let DisplayRobotState = require('./DisplayRobotState.js');

module.exports = {
  MoveGroupActionGoal: MoveGroupActionGoal,
  ExecuteTrajectoryResult: ExecuteTrajectoryResult,
  MoveGroupAction: MoveGroupAction,
  PlaceGoal: PlaceGoal,
  PickupFeedback: PickupFeedback,
  PickupAction: PickupAction,
  PickupActionFeedback: PickupActionFeedback,
  PickupActionResult: PickupActionResult,
  PlaceResult: PlaceResult,
  PlaceAction: PlaceAction,
  ExecuteTrajectoryGoal: ExecuteTrajectoryGoal,
  ExecuteTrajectoryFeedback: ExecuteTrajectoryFeedback,
  MoveGroupSequenceActionFeedback: MoveGroupSequenceActionFeedback,
  PickupActionGoal: PickupActionGoal,
  MoveGroupSequenceFeedback: MoveGroupSequenceFeedback,
  ExecuteTrajectoryAction: ExecuteTrajectoryAction,
  PickupGoal: PickupGoal,
  MoveGroupSequenceResult: MoveGroupSequenceResult,
  PlaceFeedback: PlaceFeedback,
  ExecuteTrajectoryActionGoal: ExecuteTrajectoryActionGoal,
  MoveGroupGoal: MoveGroupGoal,
  MoveGroupFeedback: MoveGroupFeedback,
  PickupResult: PickupResult,
  ExecuteTrajectoryActionFeedback: ExecuteTrajectoryActionFeedback,
  MoveGroupActionFeedback: MoveGroupActionFeedback,
  MoveGroupSequenceActionResult: MoveGroupSequenceActionResult,
  ExecuteTrajectoryActionResult: ExecuteTrajectoryActionResult,
  PlaceActionResult: PlaceActionResult,
  MoveGroupSequenceActionGoal: MoveGroupSequenceActionGoal,
  PlaceActionGoal: PlaceActionGoal,
  MoveGroupActionResult: MoveGroupActionResult,
  MoveGroupSequenceGoal: MoveGroupSequenceGoal,
  MoveGroupResult: MoveGroupResult,
  PlaceActionFeedback: PlaceActionFeedback,
  MoveGroupSequenceAction: MoveGroupSequenceAction,
  LinkScale: LinkScale,
  MotionSequenceItem: MotionSequenceItem,
  PlannerInterfaceDescription: PlannerInterfaceDescription,
  ObjectColor: ObjectColor,
  MotionSequenceRequest: MotionSequenceRequest,
  ContactInformation: ContactInformation,
  MotionPlanRequest: MotionPlanRequest,
  TrajectoryConstraints: TrajectoryConstraints,
  JointConstraint: JointConstraint,
  VisibilityConstraint: VisibilityConstraint,
  Constraints: Constraints,
  PlanningSceneComponents: PlanningSceneComponents,
  CollisionObject: CollisionObject,
  AllowedCollisionMatrix: AllowedCollisionMatrix,
  OrientationConstraint: OrientationConstraint,
  PlanningOptions: PlanningOptions,
  MotionPlanDetailedResponse: MotionPlanDetailedResponse,
  AttachedCollisionObject: AttachedCollisionObject,
  PlanningScene: PlanningScene,
  CartesianTrajectoryPoint: CartesianTrajectoryPoint,
  BoundingVolume: BoundingVolume,
  CostSource: CostSource,
  MotionPlanResponse: MotionPlanResponse,
  RobotState: RobotState,
  PositionConstraint: PositionConstraint,
  JointLimits: JointLimits,
  MoveItErrorCodes: MoveItErrorCodes,
  ConstraintEvalResult: ConstraintEvalResult,
  Grasp: Grasp,
  LinkPadding: LinkPadding,
  CartesianTrajectory: CartesianTrajectory,
  KinematicSolverInfo: KinematicSolverInfo,
  GenericTrajectory: GenericTrajectory,
  DisplayTrajectory: DisplayTrajectory,
  PlaceLocation: PlaceLocation,
  RobotTrajectory: RobotTrajectory,
  WorkspaceParameters: WorkspaceParameters,
  GripperTranslation: GripperTranslation,
  AllowedCollisionEntry: AllowedCollisionEntry,
  OrientedBoundingBox: OrientedBoundingBox,
  CartesianPoint: CartesianPoint,
  PositionIKRequest: PositionIKRequest,
  MotionSequenceResponse: MotionSequenceResponse,
  PlannerParams: PlannerParams,
  PlanningSceneWorld: PlanningSceneWorld,
  DisplayRobotState: DisplayRobotState,
};
