// AYSHTRO TECH — topics.js (search, refresh, bookmark, modal)

// Full list of Mechanical Engineering seminar topics
const fullTopicsList = [
    "Design and fabrication of gear and spline cutting attachment for lathe",
    "Fabrication of keyway(slotting fixture) attachment for lathe",
    "Fabrication of welding slag cleaning machine- mechanical project",
    "Automatic pneumatic holder gripper- mechanical project",
    "Electromagnetic shearing machine mechanical project",
    "Mechanical project on sensor operated vice",
    "Flywheel based battery charger mechanical project",
    "Pneumatic quick return mechanism for shaping machine",
    "Design and fabrication of tilting and angle vice",
    "Fabrication of coconut tree sprayer",
    "Paper cutting and rewinding machine mechanical project",
    "Hand operated can crusher mechanical project full report download",
    "Modified air cooler with split cooling report download",
    "Structural analysis of 3d printed structures",
    "Smart Robot For Face Recognition",
"Line Follower Robot Using PID Algorithm",
"HMI-Based Robotic Arm",
"Hector Slam Mapping and Indoor Positioning ROBOT",
"Radar and ROS Powered Indoor Home Mapping and Positioning Robot",
"Artificial Intelligence-Based Chatbot for Appliance Control",
"Virtual Telepresence Robot Using Raspberry Pi",
"DIY Remote Control Robot",
"Arduino based Smartphone Controlled Robot Car",
"Colour Sensing Robot with MATLAB",
"RF-Controlled Robotics Project",
"Android Phone Controlled Robotics Project",
"Fire-Extinguishing Robot",
"Wireless Gesture-Controlled Robotics Project",
"DIY Soccer Robot",
"Namaste Greeting Robot",
"Line Following Robot",
"Robocar with Wireless Steering",
"Cellphone-Operated Land Rover",
    "Cam operated hammer, bending machine",
    "Button operated gear changing system for two wheeler",
    "Design of jig and fixture for milling machine",
    "Design and fabrication of coconut dehusking machine",
    "Design and fabrication of arecanut tree climber",
    "Design and fabrication of hydraulic ram pump",
    "Automatic gear milling machine using proximity sensor",
    "Design and analysis of differential gearbox",
    "Design and structural analysis of single plate friction clutch",
    "Electromagnetic molding -mechanical project",
    "Hydraulic spring stiffness testing machine",
    "Design and fabrication of six speed constant mesh gear box",
    "Pneumatic sheet metal shearing/cutting machine report",
    "Design and fabrication of the leaf jig mechanical project",
    "Development of working model of solar operated mini seed driller",
    "Fabrication of sugarcane bud chipper-agricultural project",
    "Design and fabrication of maglev windmill",
    "Implementation of rack pinion in wash basin to save excess of water",
    "Design and fabrication of plate freezer",
    "Gas kit for two wheeler mechanical mini project",
    "Design and analysis of snap fit joints -mechanical projects",
    "Design and fabrication accident avoiding hydraulic jack",
    "Design and fabrication of briquetting machine",
    "Flying on flapping wings by using quick return mechanism",
    "Fabrication of hydraulic pipe clamp pressing machine",
    "Design and fabrication of pneumatic reciprocating water pumping system",
    "Automatic pneumatic paper cutting machine",
    "Design and fabrication of agricultural cutter using 4 bar mechanism",
    "Fabrication high pressure pneumatic machine vice",
    "Design and fabrication of pipe inspection robot report free download",
    "Front wheel steering system with movable headlights report download",
    "Crop harvester in agricultural approach pdf report download",
    "Design and fabrication of working model of abrasive jet machine",
    "Efficiency increasing system in automobile",
    "Auto indexing gear cutting attachment for pneumatic shaping machine",
    "Pneumatic solenoid operated grinding machine 2",
    "Pneumatic cup making machine mechanical project download",
    "Hydraulic pipe bending machine mechanical project",
    "Project on cold chamber die casting machine",
    "Farm Protector Drone for using Arduino",
"Design and Fabrication of External Pipe Climbing Robot",
"Anti-Riot Drone with Tear Gas",
"Robotic Solar Lawn Mower with Theft Detection",
"Pesticide Sprayer Spider Robot with Grass Cutter",
"Smart Shopping Trolley that Follows Customer",
"Accurate Speed Control Of Electric Car Using ARM",
"Rf Controlled Spy Robot With Night Vision Camera",
"2WD Vehicle Drone Air + Land Surveillance",
"Collision Detection Robotic Vehicle Using ARM",
"Fully Automated Solar Grass Cutter Robot",
"Public Property Violation and Anti Littering Drone",
"Raspberry Pi based Android Controlled Surveillance Robot",
"Object Tracker & Follower Robot Using Raspberry Pi",
"Rough Terrain Beetle Robot",
"Smart Solar Grass Cutter With Lawn Coverage",
"Path Planner Robot for Indoor Positioning",
"LIDAR based Self Driving Car",
"Motorized Solar Scarecrow Bird Animal Repellent",
"Hovercraft Controlled By Android",
"DIY 5DOF Wireless Hand Motion Controlled Robotic Gripper Arm",
"Design and Fabrication of Emergency braking system in Four-Wheeler",
"Arduino based Snake Robot Controlled using Android Application",
"Variable Head Solar Grass Cutter Weed Trimmer",
"Fire Fighter Robot With Night Vision Camera",
"RF Controlled Solar Panel Based Robotic Vehicle",
"LIDAR based Object Detection for Military Spying",
"Design and Manufacturing of Solar Powered Seed Sprayer Machine",
"Long Range Spy Robot With Night Vision",
"Long Range Spy Robot With Obstacle Detection",
"Long Range Spy Robot With Metal Detection",
"Remote Controlled Automobile Using RF",
"Robotic Vehicle Controlled By Hand Gesture Using PIC",
"Android Controlled Robotic Arm",
"Hand Motion Controlled Robotic Arm",
"Remote Controlled Pick & Place Robotic Vehicle",
"DTMF & RF Dual Controller Based Robot",
"Fire Fighter Robot with Fire Resistant Body",
"Smart Floor Cleaner Robot Using Android",
"Motion Based Maze Solver Using Android",
"Multi Robot Coordination For Swarm Robotics",
"8 Leg Spider Robot by Theo Jansen Linkage",
"Goods Transport Stair Climber Robot",
"Flamethrower & Extinguisher RC Robot",
"RC Solar Lake Pool Cleaner Drone",
"Oil Skimmer RC Boat",
"Wireless Master Joystick Controller for Robotics",
"Arduino Based Autonomous Fire Fighting Robot",
"Arduino Ultrasonic Sonar/Radar Monitor Project",
"Women Safety Night Patrolling Robot",
"Programmable Omni Direction Robotic Arm Vehicle",
"Off Road Adventure Robot with Action Camera",
"Waterproof Action Camera Drone",
"Solar Panel Cleaning Robot",
"IOT Water Pollution Monitor RC Boat",
"LIDAR Micro Done With Proximity Sensing",
"RC Underwater Exploration Drone",
"Wall Climbing Glass Cleaner Robot",
"Sustainable Fishing Drone Without Bycatch",
"Self Charging Solar Powered Drone",
"Pesticide Sprayer & COVID Sanitization Drone",
"Thermal Vision RC Robotic Tank",
"Programmable Robotic Arm Using Arduino",
"Voice controlled wheelchair for physically disabled",
"IOT Virtual Doctor Robot",
"Medical Supplies Delivery Drone",
"IOT Weather Station Airship",
"Fishing Drone",
"Water Pollution Monitoring RC Boat",
"Pollution Monitoring & Source Tracker Drone",
"Intelligent Surveillance and Night Patrolling Drone",
"Quadriplegics Wheelchair Control by Head Motion using Accelerometer",
"Design and Fabrication of Vertically Wall Climbing Glass Cleaning Robot",
"Indoor Racing Drone with Action Camera",
"DIY Tricopter Selfie Drone",
"360° Aerial Surveillance UAV With IOT Camera",
"360° Filmmaking Drone For 4K HD Video",
"Fire Extinguisher & Fire Fighting Drone",
"Thermal Screening Drone",
"IOT Social Distancing & Monitoring Robot For Queue",
"Autonomous Theft Proof Delivery Robot For Food & Ecommerce",
"Social Distancing & Mask Monitor Drone",
"DIY Ventilator using Arduino For Covid Pandemic",
"Auto Temperature Detector for Entrance For Covid Safety",
"Water Landing and Take-off Drone",
"Automated Vehicle Umbrella Tent for Hailstorm Protection",
"Advanced Automatic Self-Car Parking using Arduino Project",
"Multicontroller based Wheelchair Safety using Android, Touch, Speech & Gesture Control",
"Accident Avoiding System with Crash Detection and GPS Notification",
"Wireless Humanoid Bionic Arm on Robotic Vehicle",
"Joystick Controlled Steering Mechanism Vehicle",
"High Performance Hovercraft With Power Turning",
"MC Based Line Follower Robot",
"Agricultural Robot Project",
"Fire Fighter Robot Project",
"RF Controlled Robotic Vehicle",
"RF Controlled Robotic Vehicle With Metal Detection Project",
"Obstacle Avoider Robotic Vehicle",
"Voice Controlled Robotic Vehicle",
"Automatic Vehicle Over Speed Indication And Controlling System",
"Performance and emission study of biodiesel engine using the electronic fuel injection system",
"Automatic Train Station Announcement System With Bomb Detection",
"Engine Overheat Alarm",
"Emergency Braking System",
"Fabrication Of Solar And Wind Train",
"Hand Propulsion And Steering Dampening For Three-wheelers",
"GPS Based Automatic Vehicle Accident Information System – Three and Four Wheeler",
"Remote Controlled Solar Vehicle",
"Sensor Operated Automated Track Guided Vehicle (ATGV)",
"Regenerative Braking System",
"Solar Based Electromagnetic Breaking System",
"Experimental set up to study the gyroscopic couple due to processional motion",
"Automatic Distance Measurement And Braking System Using Ultrasonic",
"Battery Cycle",
"Motorized Screw Jack",
"Fabrication Of Industrial Trolley",
"Automatic Gear Transmission For Two Wheeler",
"Anti-Lock Braking System",
"Automatic Accident Avoiding System In Machine or in Vehicle",
"To study the performance of the CI engine using the binary mixtures of alternative fuels",
"Automated Track Guided Vehicle",
"Automatic Acceleration Controlling System In Traffic Signals",
"Fabrications Of Rice Planting Machine",
"Fabrications Of Driverless Train Technology Advanced Wireless",
"Fabrication Of Rocker Bogie Suspension System",
"Fabrication Of Camshaft",
"Redesigning and Testing of cadi 50cc 4stroke Moped",
"Fabrication Of Electrical Power Generation From Shock Absorber",
"Design and Fabrication of three-wheeler for physically handicapped",
"Fabrications Of Electromagnetic Piston Engine",
"Electromagnetically assisted advanced drum brake mechanism",
"Fabrication Of Regenerative Braking System",
"To study the performance of the two-stroke engine with a modified intake system",
"Project on Accident prevention mechanism in automobiles",
"Fabrications Of Solar Power Vehicle For Four Wheeler",
"Automatic headlight control for 4 wheelers",
"Fabrication Of 90 Degree Steering Mechanism",
"Automatic Vegetable (or) Lemon Cutting machine",
"Fabrication of Pedal Operated Water pumping system",
"Design and Fabrication of Gas Converted Power Sprayer",
"A Project on Fabrication of low-cost harvesting machine",
"Design and Fabrication of Hand Operated Fertilizer Blender",
"A Project on Portable Vegetable Cutter and Slicer",
"Fabrication of Solar Seeds Sprayer",
"Fabrication of Multi Utility Agricultural Vehicle",
"Fabrication of Pepper Thresher Machine",
"Design and Development of Natural vegetable / Fruits preservation",
"Fabrication of Seed Crushing machine",
"Agricultural Motor Pump Running using Solar Power",
"Automatic Ginger Cutting, Feeding, and Drying Machine",
"Agricultural Paddy Cleaning System by using Solar Power",
"Solar Cabinet Seed drier Integrated with Biomass",
"Fabrication of Groundnut Shelling Machine",
"A Project on Banana Fiber Extracting Machine",
"Design & Fabrication of Engine Operated Tiller Cultivator",
"Mobile Automatic Rubber Tapping System",
"Fabrication of Groundnut Harvester",
"Pneumatic 3 Axis modern Trailer for Agriculture",
"Fully Automated potato Chip Slice Making Machine",
"A Project on Automatic Lawn Mover",
"Fabrication of Multi Agri Cutter",
"Fabrication of Automated Gardener",
"Fabrication of Solar Vegetable Air Dryer",
"Pneumatic Scissor jack for loading Vegetable to Lorry or any vehicle",
"Areca Nut Tree Climbing and Cutting Machine",
"Fabrication of Vegetable Slicing Machine",
"Fabrication of Role Type Agro Sprayer",
"Semi-Automated Areca Nut Collecting Conveyor",
"Fabrication of Coconut tree Sprayer",
"Pendulum based Water Pumping System",
"Fabrication of Solar Water Fountain",
"Coconut tree Climbing and Cutting Machine",
"Groundnut Thruster mechanism",
"Fabrication of Tomato Grader",
"Pneumatic Press for Coconut pith Blocking machine",
"Fabrication of Decorticator Seed Kernel Extractor",
"Fabrication of Motor Less Weed Cutter",
"Hybrid flour mixing Machine",
"Bio-Fuel Extractor from Bio-Oil",
"Automatic Tracking Solar Grass Cutter",
"Fabrication of Rubber Tree Tapping Machine",
"Multipurpose Seed Shower",
"Fabrication of Paddy Harvesting and Threshing Machine",
"Design and Analysis of Universal Cutter (Especially for Coconut and Areca nut)",
"Automatic Seed Sowing using Solar",
"A Project on Optical valve timing encoder",
"Fabrication Of Mechanical Grass Cutter",
"Fabrications Of Wind Power Car For Four Wheeler",
"Bullock Cart With Material Lifting And Dumping Mechanism",
"Fabrication Of Tilting Vehicle Mechanism For Four Wheeler",
"Design and Fabrication of propeller shaft",
"Comparative studies of solar stills",
"Speech Detector Robotic Vehicle Control",
"Robotic Arm Vehicle Controlled By Touch Screen Display",
"TV Remote Controlled Robotic Vehicle Project",
"Robot Controlled By Android Application",
"Android Controlled Fire Fighter Robot",
"Android Controlled Spy Robot With Night Vision Camera",
"Android Controlled Pick And Place Robotic Arm Vehicle Project",
"Android Controlled Wildlife Observation Robot",
"Wireless Surveillance Robot Controlled by PC",
"RF Based Night Vision Spy Robot Using PIC",
"Advanced Military Spying & Bomb Disposal Robot",
"Wildlife Observation Robot Using Rf",
"Shuttling Metro Train Between Stations Project",
"DC Motor Speed Control By Android",
"Solar Floor Cleaner Robot",
"IOT Dog Daycare Robot",
"Android Micro Drone With Obstacle Detector",
"Automatic Whiteboard Eraser Robot",
"Automatic Vacuum Cleaner Robot Project",
"RF Controlled Beach Cleaner Robotic Vehicle",
"Self Balancing Robot Project",
"LIDAR based Autonomous Vehicle with GPS Tracking",
    "Cnc pneumatic autofeed punching machine",
    "Swing electricity generation system mechanical project",
    "Spring testing machine mechanical project",
    "Design and fabrication of mini hydraulic press machine",
    "Design and fabrication of a kinematic walker",
    "Fabrication of pedal powered dual chain hacksaw machine",
    "Fabrication of high speed reciprocating hacksaw machine",
    "Design and fabrication of hydraulic arm full report pdf | mechanical project",
    "Fabrication of vertical axis wind turbine pdf report | mechanical project",
    "Design and fabrication of air operated mirror cutting machine",
    "Design and fabrication of gear box full report download",
    "Design and analysis of scissor jack full report download",
    "Design of hydraulic jack and analysis report download",
    "Design and fabrication of a manually operated paper recycling machine",
    "Design and fabrication of film frame by Geneva mechanism",
    "Design and fabrication of pneumatic forging machine",
    "Design and fabrication of grass cutter for agricultural application",
    "Design and fabrication of zig zag pneumatic lift-mechanical project",
    "Design and fabrication of automatic tire inflation system-mechanical project",
    "Design and fabrication of injection molding machine-mechanical project",
    "Design and fabrication of solar operated tricycle full report download",
    "Design and fabrication of four way hacksaw-mechanical project",
    "Fabrication of u-type, v-type, l-type angle bending machine report pdf download",
    "Project on design and fabrication of cam vice",
    "Design and fabrication of cylindrical tapping machine",
    "Design and development of hydraulic jack report download",
    "Fabrication of tube bending machine mechanical project",
    "Fabrication of pneumatic mobile crane mechanical project",
    "Design and fabrication of tension less bike full report download",
    "Design and fabrication of hammer mill mechanical project",
    "Fabrication of miniature (mini) boiler mechanical project",
    "Design and fabrication of small scale sugarcane harvesting machine",
    "Design and fabrication of air engine- mechanical project",
    "Design and fabrication of pneumatic bearing puller, press, sheet bend",
    "Fabrication of pneumatic multi-purpose machine- mechanical project",
    "Fabrication of steam power plant",
    "Fabrication of sensor operated pneumatic automatic punching machine",
    "Fabrication of multi nut tighter or remover",
    "Fabrication of quick lifting jack with gear arrangement",
    "Design and fabrication of sunflower thresher- agricultural project",
    "Fabrication of chainless bicycle (shaft driven bicycle)",
    "Fabrication of variable volume engine | buy mechanical project",
    "Design and fabrication of pipe bending machine mechanical project",
    "Fabrication of unconventional compressor for heavy truck",
    "Fabrication of pelton wheel turbine | mechanical project",
    "Fabrication of automatic drilling and reaming attachment control",
    "Air compressor using crank and slotted link mechanism",
    "Automatic paper cutting machine using Geneva mechanism",
    "Combination of pedal–powered hacksaw,charger and washing machine",
    "Design and fabrication of equaliser clamp",
    "Automatic pvc pipe cutting machine mechanical project",
    "Design and fabrication of abrasive belt grinder mechanical project",
    "Design and fabrication of tire coupling-mechanical project",
    "Design and fabrication of stair climber trolley mechanical project",
    "Design and fabrication of helical tube in coil type heat exchanger",
    "Design and fabrication of watt and porter governor",
    "360° rotating conveyor belt with up-down mechanism",
    "Pedal powered water pumping and purification mechanical project",
    "Fabrication of pneumatic plastic injection molding machine",
    "Automatic pneumatic punching and riveting machine",
    "Design and fabrication of hydraulic log splitter",
    "Design and fabrication of mini ball mill",
    "Design and fabrication of hand water pump operated by a pendulum",
    "Design and fabrication of water pump using scotch yoke mechanism",
    "Gearless power transmission in angular positions using rods",
    "Beam engine powered circular sawing machine-mini mechanical project",
    "Design and fabrication of angular drilling machine",
    "Foot operated paper plate making machine",
    "Design and fabrication of gear type self-centering arm gripper",
    "Design and fabrication of modified crane bucket material handling system",
    "Telescopic cylinder using rack and pinion mechanism-mechanical mini project",
    "Design and fabrication of semi-automatic printing machine",
    "Design and fabrication of printing press machine using double toggle mechanism",
    "Rotary drum filter (solid-liquid separation ) mechanical project",
    "V net fence weaving machine mechanical project",
    "Design and fabrication of industrial conveyor using four bar mechanism",
    "Design and fabrication of hydraulic spring stiffness testing machine",
    "Design and fabrication of automatic tyre inflation system-mechanical project",
    "Fabrication of variable volume engine | buy mechanical project",
    "Fabrication of unconventional compressor for heavy truck",
    "Automatic gear changer in two wheelers – pneumatic model",
    "Project | abstract of automatic gear changer",
    "Project | compressed air vehicle (cav)",
    "What is monowheel and how it works",
    "Project | compressed air and air drill operated bicycle",
    "Kinetic energy recovery system in bicycle (kers bicycle)",
    "Automatic pneumatic bumper for two wheeler",
    "Anti-theft wheel locking system project for two wheeler",
    "Mechanical project on advance antitheft system for two wheelers",
    "Hovercraft project/seminar report pdf and ppt download for mechanical engineers",
    "Emission control for diesel engine-mechanical project",
    "Fuel injector testing equipment-mechanical project",
    "Automatic gear changer in two and four wheeler vehicle",
    "Automatic electro-magnetic gear shifting system",
    "Spark plug cleaner and tester- mechanical project",
    "Tyre inflation and deflation system for four wheeler",
    "Gear less power transmission with scotch yoke mechanism",
    "Sensor operated electromagnetic clutch and gear changing, braking system",
    "Road power generation (rpg) by sliding mechanism",
    "Automatic brake failure indicator and engine overheating alarm",
    "Mechanical project on automatic gear changer",
    "Automatic braking system to avoid road accidents",
    "Compressed air production using vehicle suspension",
    "Project on antilock braking system used for automobile cars",
    "Mechanical project on speed vehicle sensing",
    "Automatic road curve finder mechanical project",
    "Integrated drunk and drive prevention system",
    "Design and fabrication of a universal coupling (hooke’s joint ) report download",
    "Design and fabrication of portable pneumatic fuel pump",
    "Automatic pneumatic clutch and braking system",
    "Design and development of radial air engine",
    "Design and fabrication of electromagnetic engine",
    "Design and fabrication of power steering system using worm and worm wheel mechanism",
    "Design, comparison and analysis of a composite drive shaft for an automobile",
    "Design and fabrication of shaft drive mechanism for automobiles",
    "Design and fabrication of hub center steering system using bicycle",
    "Design and fabrication of air operated mini car",
    "Design and fabrication of friction less energy generation with tyre",
    "Hand brake realise for ignition and clutch based system",
    "Design and analysis of ic engine piston using catia-ansys software",
    "Design and fabrication of grass cutter for agricultural application",
    "Design and fabrication of sunflower thresher- agricultural project",
    "Hydraulic operated coconut dehusking machines report- mechanical projects",
    "Solar agricultural water pumping system",
    "Manually operated biogas filling machine – mechanical engineering project",
    "Pedal operated washing machine",
    "Pedal powered/operated centrifugal pump (ppcp) project",
    "Solar operated sprayer for agricultural purpose- mechanical project",
    "Automatic pneumatic water pumping system",
    "Three axis pneumatic modern trailer-mechanical project",
    "Use of hydro pump for agriculture application mechanical project",
    "Automatic wood crusher with conveyor belt",
    "Multipurpose coconut, mango, sugar cane bud cracker machine",
    "Development of working model of manual operated multipurpose seed driller and fogging cum sprayer pump",
    "Automatic potato chips making machine mechanical project",
    "Design and fabrication of spherical turning tool for lathe machine",
    "Design and fabrication of automatic planter machine for agricultural application",
    "Rice trans planter mechanism for agricultural purpose project",
    "Design and fabrication of onion seed sowing machine-mechanical project",
    "Design and fabrication of mini hydraulic press machine",
    "Fabrication of pneumatic mobile crane mechanical project",
    "Design and fabrication of pneumatic bearing puller, press, sheet bend",
    "Fabrication of pneumatic multi-purpose machine- mechanical project",
    "Fabrication of sensor operated pneumatic automatic punching machine",
    "Automatic pneumatic bumper for two wheeler | mechanical project with report pdf",
    "Project on pneumatic sheet metal cutting machine",
    "Pneumatic four- axis material handling equipment",
    "Project | pedal and pneumatic actuator operated air compressor",
    "Automatic electro-hydraulic jack for light vehicles",
    "Hydraulic bearing puller",
    "Pneumatic auto feed drilling machine",
    "Fluid hydraulics operated robotic arm",
    "Hydro- pneumatic vice with pressure booster mechanical project",
    "7 hydraulic jack related mechanical projects report download",
    "Automatic pneumatic grinding machine mechanical project",
    "Fabrication of manual hydraulic grease gun for industries",
    "Pneumatic machining time reduction in shaper machine",
    "Pneumatic operated multi-purpose grinding machine",
    "Mechanical project on hydraulic fork lift",
    "Hydraulic controlled jcb machine-mechanical project",
    "Hydraulic operated lifting table for four wheeler",
    "Pneumatic four- axis material handling equipment",
    "Automatic pneumatic vice and jack | buy",
    "Automatic pneumatic grinding machine",
    "Automatic pneumatic operated waste can crusher machine",
    "Automatic pneumatic sand ramming machine mechanical project",
    "Project on automatic pneumatic bumper",
    "Pneumatic sheet punching machine mechanical project",
    "Pneumatic material handling system mechanical project",
    "Design and fabrication of pneumatic lifting table",
    "Pneumatic power steering mechanical project",
    "Automatic pneumatic clutch and braking system",
    "Fabrication of pneumatic controlled riveting and punching machine",
    "Design and development of air caster -mechanical project",
    "Design and fabrication of pneumatic slotting machine",
    "Pneumatic brick making machine -mechanical project",
    "Hydraulic lift with power booster -mechanical projects",
    "Solar energy powered air conditioner: mechanical engineering project",
    "Power generation using speed breaker with help of rack and pinion mechanism",
    "Power generation using speed breaker with help of spring mechanism",
    "Foot path electricity generation system mechanical project",
    "Auto charging grinding machine with solar power",
    "Solar drilling machine- buy mechanical projects",
    "Solar air cooler with heater- buy mechanical project",
    "Vertical axis wind turbine mechanical project",
    "Time operated solar tracking system | mechanical project",
    "Solar agricultural water pumping system",
    "Fabrication of vertical axis wind turbine pdf report | mechanical project",
    "Design and fabrication of solar operated tricycle full report download",
    "Fabrication of steam power plant",
    "Solar water purification by using thermal method | buy",
    "Electricity generation by footsteps (staircase) -regenerative mechanical project",
    "Water pumping system and power generation by using wind power (360 degree rotation) and pedal power",
    "Pedal operated dress washing machine -buy",
    "Implementation of maglev turbine and solar power for streetlights",
    "Design and manufacturing of briquette making machine",
    "Design and fabrication of vertical axis wind turbine for home power bank",
    "Design and fabrication of downdraft gasifier applied to i.c. Engine",
    "Design and fabrication future tree wind and solar (best mechanical project 2017)",
    "Design and fabrication of efficiency increased advanced wind turbine system",
    "Seminar and project on firefighting robot",
    "Artificial intelligent based automatic solar tracking",
    "Automatic temperature controller with cooling system",
    "Electromagnetic embossing machine project",
    "Automatic board cleaner-mechanical project",
    "Robotic vacuum cleaner- buy mechanical project",
    "Motorized triangular air compressor-buy",
    "Automatic plate washing machine | buy",
    "Automatic material dimension analyzing robot with load cell",
    "Automatic foot dust vacuum cleaning machine | mechanical project",
    "Automatic poor quality rejection using conveyor",
    "Project on fully automated firefighting robot",
    "Pedal operated cell phone charger",
    "Automatic dimension measuring machine | mechanical project",
    "Automatic high speed bottle washing machine project",
    "Automatic scrap collecting vehicle project",
    "Automatic paint spraying pick and place equipment",
    "90 degree steering system with high torque dc motor-buy mech projects",
    "Aircraft auto pilot roll control system project report download",
    "Development of auto gear transmission with use of magnetic clutch",
    "Design and fabrication of automated glass cleaning machine",
    "Automatic double axis welding machine-mechanical project",
    "Pedal operated direct simple hacksaw project",
    "Weight operated material handling device",
    "Multipurpose indexing device -lathe ,milling, drilling attachment mechanical",
    "Automatic bar feeding mechanism for cutting machine",
    "Milling attachment / fixture for lathe machine",
    "Pipe thread cutting machine",
    "Auto centric system for four jaw chuck",
    "Multipurpose tool changer-mechanical project",
    "Automatic boring mechanism for foundry project",
    "Tool post grinder -project on lathe machine attachment",
    "Double acting hack saw machine operated by scotch yoke mechanism",
    "Multi-spindle drill head- mechanical project",
    "Auto roll punching machine using Geneva mechanism",
    "Auto feed pneumatic sheet metal cutting machine",
    "Fabrication of automatic drilling and reaming attachment control",
    "Gear type injection molding machine | mechanical project",
    "Design and fabrication of mini hydraulic press machine",
    "Design and fabrication of air operated mirror cutting machine",
    "Mini milling machine project for mechanical final year students",
    "Design and fabrication of drill tool dynamometer",
    "Design and fabrication of toggle jack full report download",
    "Design and fabrication of pneumatic drill jig for reducing lead time",
    "Design and fabrication of gear cutting attachment on lathe machine report",
    "Design and fabrication of sheet rolling machine",
    "Continuous cut-off machine | automation in cut-off machine projects",
    "Slotting and parting machine and wood rack cutting machine with worm drive table",
    "Fabrication of brass screw threading and cutting machine",
    "Fabrication of universal tapping machine mechanical project",
    "Design and fabrication of rolling machine with splines",
    "Development of multipurpose machine with scotch yoke mechanism",
    "Design and fabrication of multi-axis welding with auto indexing",
    "Design and development of ball burnishing tool",
    "Automatic embossing drilling machine mechanical project",
    "Contour attachment for lathe machine -mechanical project",
    "Development of for wire electrical discharge machining",
    "List of non-conventional mechanical projects 2017",
    "The jig saw machine report download- mechanical project",
    "Automatic distance measurement and braking system",
    "Automatic engine over heating alarm",
    "Automatic firefighting crane",
    "Automatic ignition stop while drunken drive",
    "Automatic ignition stop while over load",
    "Design and fabrication of gearless transmission",
    "Electronic steering system",
    "Fabrication of automatic electro-hydraulic jack for four wheeler",
    "Design and fabrication of jig",
    "Fabrication of pneumatic shaping machine",
    "Fabrication of abrasive belt grinding",
    "Fabrication of die polishing machine",
    "Fabrication of hydraulic press with power pack",
    "Fabrication of internal grinding attachment for lathe",
    "Fabrication of mini hydraulic press machine",
    "Fabrication of oil skimmer machine",
    "Fabrication of pneumatic injection moulding machine",
    "Fabrication of pneumatic machine",
    "Fabrication of pneumatic sheet cutting",
    "Fabrication of pneumatic slotting machine",
    "Fabrication of portable lifting frame",
    "Fabrication of reciprocating grinding machine",
    "Multiple spindle drilling machines",
    "Multiple spindle grinding machines",
    "Sensor based inspection conveyor",
    "Single axis sliding table",
    "Two axis sliding table",
    "Automatic dimensioning machine",
    "Automatic machine idle while floor temperature rises",
    "Automatic over load indicator for bridge",
    "Automatic poor quality rejecter",
    "Automatic railway gate controller",
    "Automatic rain sensing window",
    "Automatic track guided vehicle (ATGV)",
    "Automatic traffic and street light controller",
    "Automatic transformer heat reduction system",
    "Fabrication of conveyor automation",
    "Fabrication of material handling",
    "Fabrication of motorized hydraulic jack",
    "Fabrication of motorized screw jack",
    "Fabrication of six legged robot for climbing irregular surface six legged robot for climbing over steps",
    "Line following robot for material handling",
    "Remote controlled scissor jack",
    "Remote controlled wheel chair",
    "Remote operated wireless crane control system",
    "Servo motor control using mobile phone",
    "Solar powered agricultural water pumping system with auto tracking",
    "Solar powered auto charging grinding machine",
    "Speech recognition controlled wireless pick and place robot",
    "Voice controlled material handling vehicle",
    "Voice operated intelligent lift or elevator",
    "Wireless screw jack",
    "Adjustable stroke mechanism –using double crank and slotted link mechanism",
    "Automatic PVC pipe feeding and cutting machine",
    "Automatic ramming machine",
    "Automatic seed sowing machine",
    "Ball milling m/c prototype",
    "Contour turning attachment for lathe",
    "Design and fabrication of equaliser clamp",
    "Design and fabrication of hydraulic operated squeezing machine",
    "Design and fabrication of manual drilling machine by gear mechanism",
    "Electricity and water pumping system using wind mill",
    "Fabrication broaching machine - using scotch-yoke mechanism",
    "Fabrication cattle feed cutting machine",
    "Fabrication of ground nut cultivation machine",
    "Fabrication of box shifting mechanisms",
    "Fabrication of coin separator machine",
    "Fabrication of double acting hacksaw machine - using scotch-yoke mechanism",
    "Fabrication of gear type injection moulding",
    "Fabrication of grass cutting machine",
    "Fabrication of hand operated injection moulding machine",
    "Fabrication of hand operated riveting machine",
    "Fabrication of hydraulic pipe bending machine",
    "Fabrication of manual operated weight lifting portable cantilever hoist",
    "Fabrication of manual operating mixer grinder",
    "Fabrication of mini milling machine",
    "Fabrication of motor less weed cutter",
    "Fabrication of paper thresher machine",
    "Fabrication of pedal operated centrifugal pump",
    "Fabrication of pedal powered drilling machine",
    "Fabrication of pedal powered water pumping system",
    "Fabrication of pedalling compressor",
    "Fabrication of Pelton wheel turbine",
    "Fabrication of pneumatic high speed hack saw machine",
    "Fabrication of pneumatic lifting table mechanism",
    "Fabrication of pneumatic pallet truck",
    "Fabrication of pneumatic pipe bending mechanism",
    "Fabrication of pneumatic portable ramming machine",
    "Fabrication of pneumatic quick return mechanism",
    "Fabrication of pneumatic reciprocating water pumping machine",
    "Fabrication of portable coin separator machine",
    "Fabrication of portable ground nut thruster",
    "Fabrication of portable hydel power plant",
    "Fabrication of power press",
    "Fabrication of punching machine using slotted bell crank mechanism",
    "Fabrication of PVC wind turbine and analyses working performance",
    "Fabrication of rice trans planter machine",
    "Fabrication of solar chimney powered electric generator",
    "Fabrication of solar irrigation system",
    "Fabrication of solar paddy dryer",
    "Fabrication of solar seed dryer",
    "Fabrication of swing blade saw mill machine",
    "Fabrication of thermo coal cutting machine",
    "Fabrication of waste material crushing machine",
    "Fabrication of water wheel water pumping system",
    "Fabrication of weeds cutter",
    "Fabrication of weight lift trolley by ratchet mechanism",
    "Fabrication of wind powered ceiling fan",
    "Fabrication portable seed sprayer",
    "Fabrication power hammer by six bar slider crank mechanism",
    "Fabrication reciprocating water pump using scotch-yoke mechanism",
    "Fabrication of pneumatic hammer machine",
    "Hydraulic bearing puller",
    "Hydraulic scissor jack",
    "Kinematic design of aircraft landing gear mechanism",
    "Kinematic design of lift-tipping mechanism using –crank rocker mechanism",
    "Kinematic design of multiple drive- using parallelogram mechanism",
    "Magnetic scarp collecting vehicle",
    "Manually operated pipe bending machine by slider crank mechanism",
    "Mould rectification method modified for cost saving",
    "Multi directional material handling machine",
    "Pendulum based water pumping system",
    "Pneumatic bar feeding mechanism for hack saw machine",
    "Pneumatic quick return mechanism",
    "Pneumatic scissor jack",
    "Shaft runout checking system",
    "Slotting attachment in drilling machine",
    "Speed breaker using power production",
    "Vertical axis windmill",
    "Water wheel power generation",
    "Wind mill power generator",
    "Wind mill using water pumping system",
    "Fabrication of ground coupled heat exchanger",
    "Fabrication of air cooled heat exchanger",
    "Fabrication of mini steam power plant",
    "Fabrication of solar chimney powered electric generator",
    "Fabrication of thermo-electric refrigerator",
    "Fabrication of thermo-electric solar air conditioner",
    "Fabrication solar power operated air cooling system for lube oil cooling",
    "An investigation of the effects of matrix on mechanical properties of polymer composite",
    "An investigation of the effects of matrix on mechanical properties of metal composite",
    "An investigation of the effects of reinforcement on mechanical properties of metal composite",
    "Analysis of mechanical properties in an unidirectional sisal/epoxy composite material",
    "Design and analysis for hand layup moulding to machine moulding natural composite and their mechanical &microstructure property",
    "Design and experimental analysis of composite leaf spring made of glass fibre reinforced polymer. (design or fabric)",
    "Design and fabrication of hybrid (bamboo & coir) natural fibre composite and analyse their mechanical properties depend various heat treatment",
    "Design and fatigue analysis of long fibre-reinforced polymers composite",
    "Design and fatigue analysis of short fibre-reinforced polymers composite",
    "Design and fabrication of continuous and discontinuous composite material and analysis their mechanical &microstructure properties",
    "Evaluation of mechanical properties of natural fibre reinforced composite material (sisal & mudar)",
    "Evaluation of mechanical properties of natural fibre reinforced composite material (banana & glass fibre)",
    "Evaluation of mechanical properties of natural fibre vs glass fibre reinforced composite material",
    "Fabrication and testing of animal fibre vs vegetable fibre and analysis their mechanical properties",
    "Fabrication and testing of chicken feather fibre reinforced composite material",
    "Fabrication and testing of coir fibre reinforced composite material",
    "Fabrication and testing of composite material (graphite & aluminium) and analysis their mechanical and micro structure properties",
    "Fabrication and testing of grass fibre reinforced composite material",
    "Fabrication and testing of natural fibre (sisal-glass) reinforced composite material",
    "Fabrication and testing of palm fibre reinforced composite material",
    "Fabrication and testing of sisal fibre reinforced composite material",
    "Fabrication of bamboo composite materials and prediction of optimum fibre orientation using artificial neural network",
    "Fabrication of composite materials and prediction of optimum fibre orientation using artificial neural network",
    "Heat treatment for natural composite material and analysis their structure",
    "Mechanical characterisation and modelling mechanical properties of aluminium particle reinforced - metal matrix composites (design or fabric)",
    "Prototypical ling and analysis of composite leaf spring using FEA for light vehicle mini truck (design or fabric)",
    "Aero dynamic analysis and preliminary design tool",
    "Aerodynamic interference effects on tilting prop rotor",
    "Analysis function of a bicycle frame",
    "APDL design piston coating",
    "Bearing housing fixture",
    "Cad modelling and bending analysis of automotive crankshaft",
    "Design analysis of slide mechanism",
    "Design and analyse the two wheeler suspension system in",
    "Design and analysis muffler flow",
    "Design and analysis of hydraulic jack for lifting light vehicles",
    "Design and analysis of leaf spring in heavy truck",
    "Design and analysis the tools in cold condition",
    "Design and development of automatic braking system",
    "Design and performance analyse the two wheeler hydraulic suspension system",
    "Design and torque analysis in two wheeler disc",
    "Design & analysis of multi spindle drilling machine",
    "Design of three way gripper with self-loader",
    "Design & analysis of crane hook assembly",
    "Design & analysis of domestic windmill blades",
    "Differential analysis design project",
    "Dimension analysis of a conveyor",
    "Effect of aerodynamic force on aircraft body",
    "Performance analysis of tungsten carbide coated piston",
    "Stress and fatigue analysis of cam shaft",
    "Suspension design for off-road construction machines  DO",

];




let currentTopics = [...fullTopicsList];
let currentFiltered = [...currentTopics];
let selectedTopicForModal = "";

/* ─── Floating message ─── */
function showFloatingMessage(msg) {
    const existing = document.querySelector('.message-box');
    if (existing) existing.remove();
    const div = document.createElement('div');
    div.className = 'message-box';
    div.innerText = msg;
    document.body.appendChild(div);
    setTimeout(() => div.remove(), 2200);
}

/* ─── Update topic count badge ─── */
function updateCount(shown, total) {
    let badge = document.getElementById('topic-count');
    if (!badge) return;
    badge.textContent = shown === total
        ? `Showing all ${total} topics`
        : `Showing ${shown} of ${total} topics`;
}

/* ─── Render topics list ─── */
function renderTopics(listToRender) {
    const container = document.getElementById('topics-list');
    if (!container) return;
    container.innerHTML = "";

    updateCount(listToRender.length, fullTopicsList.length);

    if (listToRender.length === 0) {
        const empty = document.createElement('li');
        empty.className = 'empty-state';
        empty.innerHTML = '<i class="fas fa-search-minus"></i>No topics match your search.';
        empty.style.listStyle = 'none';
        container.appendChild(empty);
        return;
    }

    const savedBookmarks = JSON.parse(localStorage.getItem("ayshtro_bookmarks") || "[]");

    listToRender.forEach((topic, idx) => {
        const li = document.createElement('li');
        li.className = "topic-item";
        li.setAttribute('data-topic-text', topic);

        // Serial number
        const numSpan = document.createElement('span');
        numSpan.className = "topic-num";
        numSpan.textContent = String(idx + 1).padStart(2, '0');

        // Topic text
        const spanText = document.createElement('span');
        spanText.className = "topic-text";
        spanText.innerText = topic;

        // Button wrapper
        const actions = document.createElement('div');
        actions.className = "topic-actions";

        // View button
        const btnView = document.createElement('button');
        btnView.innerHTML = "📌 View";
        btnView.className = "show-topic-buttons";
        btnView.setAttribute('aria-label', `View topic: ${topic}`);
        btnView.addEventListener('click', (e) => {
            e.stopPropagation();
            selectedTopicForModal = topic;
            openModalWithTopic(topic);
        });

        // Bookmark button
        const bookmarkBtn = document.createElement('button');
        const isBookmarked = savedBookmarks.includes(topic);
        bookmarkBtn.innerHTML = isBookmarked ? "⭐ Saved" : "☆ Save";
        bookmarkBtn.className = "bookmark-button" + (isBookmarked ? " selected" : "");
        bookmarkBtn.setAttribute('aria-label', `Bookmark topic: ${topic}`);
        bookmarkBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            let bookmarks = JSON.parse(localStorage.getItem("ayshtro_bookmarks") || "[]");
            if (bookmarks.includes(topic)) {
                bookmarks = bookmarks.filter(b => b !== topic);
                bookmarkBtn.classList.remove("selected");
                bookmarkBtn.innerHTML = "☆ Save";
                showFloatingMessage("⭐ Bookmark removed");
            } else {
                bookmarks.push(topic);
                bookmarkBtn.classList.add("selected");
                bookmarkBtn.innerHTML = "⭐ Saved";
                showFloatingMessage("✅ Topic bookmarked!");
            }
            localStorage.setItem("ayshtro_bookmarks", JSON.stringify(bookmarks));
        });

        actions.appendChild(btnView);
        actions.appendChild(bookmarkBtn);

        li.appendChild(numSpan);
        li.appendChild(spanText);
        li.appendChild(actions);
        container.appendChild(li);

        // Staggered animation
        requestAnimationFrame(() => {
            setTimeout(() => li.classList.add('visible'), idx * 30);
        });
    });
}

/* ─── Open modal ─── */
function openModalWithTopic(topic) {
    const modal = document.getElementById('popup-modal');
    if (!modal) return;
    selectedTopicForModal = topic;

    // Update preview inside modal
    let preview = modal.querySelector('.modal-topic-preview');
    if (!preview) {
        preview = document.createElement('div');
        preview.className = 'modal-topic-preview';
        const adContent = modal.querySelector('#ad-content');
        if (adContent) adContent.insertAdjacentElement('beforebegin', preview);
    }
    preview.textContent = `"${topic}"`;

    modal.classList.add('active');
    modal.style.display = 'flex';
}

/* ─── Close modal ─── */
function closeModal() {
    const modal = document.getElementById('popup-modal');
    if (!modal) return;
    modal.classList.remove('active');
    modal.style.display = 'none';
}

/* ─── Search function ─── */
window.searchFunction = function () {
    const input = document.getElementById('search-input');
    if (!input) return;
    const filter = input.value.toLowerCase().trim();
    if (filter === "") {
        currentFiltered = [...currentTopics];
    } else {
        currentFiltered = currentTopics.filter(t => t.toLowerCase().includes(filter));
    }
    renderTopics(currentFiltered);
};

/* ─── Refresh topics ─── */
function refreshTopics() {
    currentTopics = [...fullTopicsList];
    currentFiltered = [...currentTopics];
    renderTopics(currentFiltered);
    showFloatingMessage("🔄 Topics refreshed!");
    const searchBox = document.getElementById('search-input');
    if (searchBox) searchBox.value = "";

    // Spin icon
    const icon = document.querySelector('#refresh-button i');
    if (icon) {
        icon.style.transition = 'transform 0.5s ease';
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => { icon.style.transform = ''; }, 500);
    }
}

/* ─── Init ─── */
function init() {
    // Insert topic count badge before list
    const list = document.getElementById('topics-list');
    if (list && !document.getElementById('topic-count')) {
        const badge = document.createElement('p');
        badge.id = 'topic-count';
        list.insertAdjacentElement('beforebegin', badge);
    }

    renderTopics(currentTopics);

    // Refresh button
    const refreshBtn = document.getElementById('refresh-button');
    if (refreshBtn) refreshBtn.addEventListener('click', refreshTopics);

    // Modal close
    const closeSpan = document.querySelector('.close');
    if (closeSpan) closeSpan.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('popup-modal');
        if (modal && e.target === modal) closeModal();
    });

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Copy button
    const copyBtn = document.getElementById('copy-button');

if (copyBtn) {
    copyBtn.addEventListener('click', () => {

        if (!selectedTopicForModal) {
            showFloatingMessage("Select a topic first");
            return;
        }

        // Modern method
        if (navigator.clipboard) {

            navigator.clipboard.writeText(selectedTopicForModal)
            .then(() => {
                showFloatingMessage("📋 Copied!");
            })
            .catch(() => fallbackCopy());

        } else {
            fallbackCopy();
        }

        function fallbackCopy() {
            const textarea = document.createElement("textarea");

            textarea.value = selectedTopicForModal;

            document.body.appendChild(textarea);

            textarea.select();
            document.execCommand("copy");

            document.body.removeChild(textarea);

            showFloatingMessage("📋 Copied!");
        }

    });
}

    // Click on entire list item opens modal
    document.addEventListener('click', (e) => {
        const liItem = e.target.closest('.topic-item');
        if (
            liItem &&
            !e.target.closest('.show-topic-buttons') &&
            !e.target.closest('.bookmark-button')
        ) {
            const topicElem = liItem.querySelector('.topic-text');
            if (topicElem) {
                selectedTopicForModal = topicElem.innerText;
                openModalWithTopic(selectedTopicForModal);
            }
        }
    });

    // Live search on input (covers paste, clear etc.)
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', window.searchFunction);
    }
}

// Start
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}