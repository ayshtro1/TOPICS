// AYSHTRO TECH — EE topics.js (search, refresh, bookmark, modal + shuffle)
// Electrical Engineering branch seminar & project topics

// Full list of Electrical Engineering seminar / project topics
const fullTopicsList = [
   
   "RFID Based Attendance System",
"Sun Tracking Solar Panel",
"Smart Dustbin with IoT",
"IoT Smart Energy Meter",
"Patient Health Monitoring System",
"Fire Fighting Robot",
"Greenhouse Monitoring System",
"Data Logger System",
"Industrial Conveyor Automation",
"Smart Robot For Face Recognition",
"Line Follower Robot Using PID Algorithm",
"HMI-Based Robotic Arm",
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
"Solar Floor Cleaner Robot",
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
"Data Acquisition system for Embedded wireless unmanned vehicle in underwater environment",
"Tracked Robot based on Neural Network Control System",
"Automatic Weed Detection System and Smart Herbicide Sprayer Robot for corn fields",
"Autonomous Soil Monitoring Robot Based on Sensors",
"WiFi Based Communication and Localization of an Autonomous Mobile Robot for Refinery Inspection",
"Design And Development Of Smart Sales Robot For Supermarket",
"A Robotic Crack Inspection and Mapping System for Bridge Deck Maintenance",
"Integration of Low-Cost Supervisory Mobile Robots in Domestic Wireless Sensor Networks",
"Path Following Using Dynamic Transverse Feedback Linearization for Car-Like Robots",
"Raspberry Pi based Home Automation System using Voice Control",
"Raspberry Pi Face Recognition Door Lock System",
"Smart CCTV Surveillance Camera using Raspberry Pi",
"Raspberry Pi Weather Monitoring Station with IoT",
"Raspberry Pi based Smart Traffic Light Control System",
"Raspberry Pi Gesture Controlled Robot",
"Smart Mirror using Raspberry Pi with News and Weather Display",
"Raspberry Pi based Air Quality Monitoring System",
"Raspberry Pi Pico based Digital Oscilloscope",
"Raspberry Pi Media Center using Kodi",
"Raspberry Pi based Autonomous Obstacle Avoidance Robot",
"Smart Parking System using Raspberry Pi and Ultrasonic Sensors",
"Raspberry Pi based Real-time Object Detection using YOLO",
"Raspberry Pi Solar Panel Efficiency Monitor",
"Raspberry Pi based Smart Water Quality Monitoring System",
"Raspberry Pi Voice Controlled Home Appliances",
"Raspberry Pi based Intruder Alert System using PIR Sensor",
"Smart Baby Monitoring System using Raspberry Pi",
"Raspberry Pi based Wireless Video Surveillance Drone",
"Raspberry Pi Fingerprint Based Attendance System",
"Smart Waste Bin Monitoring System using Raspberry Pi",
"Raspberry Pi based Automatic Plant Watering System",
"Raspberry Pi Network Attached Storage (NAS) Server",
"Raspberry Pi based RFID Door Access Control",
"Smart Helmet for Worker Safety using Raspberry Pi",
"Raspberry Pi based Gas Leakage Detection and Alert System",
"Raspberry Pi Remote Controlled Car using Web Interface",
"Smart Library Book Management System using Raspberry Pi",
"Raspberry Pi based Social Distancing Monitoring Robot",
"Raspberry Pi Handwritten Digit Recognition using Neural Network",
"Smart Energy Meter using Raspberry Pi",
"Raspberry Pi based LPG Gas Cylinder Level Monitoring",
"Raspberry Pi Automated License Plate Recognition System",
"Smart Trolley using Raspberry Pi for Retail Stores",
"Raspberry Pi based Underground Cable Fault Detection",
"Raspberry Pi Face Mask Detection System",
"Smart Classroom Automation using Raspberry Pi",
"Raspberry Pi based Voice Controlled Wheelchair",
"Raspberry Pi Weather Balloon Data Logger",
"Smart Anti-Theft System for Bicycle using Raspberry Pi",
"Raspberry Pi based Sign Language Translator",
"Smart Dustbin using Raspberry Pi with Lidar Sensor",
"Raspberry Pi Real-time Heart Rate Monitoring System",
"Raspberry Pi based Soil Moisture and Irrigation Controller",
"Smart Aquarium Monitor using Raspberry Pi",
"Raspberry Pi based Automatic Toll Collection System",
"Raspberry Pi Gesture Controlled Home Lighting",
"Smart Notifications Alert Board using Raspberry Pi",
"Raspberry Pi based Barcode Scanner for Inventory Management",
"Raspberry Pi Speech Recognition Assistant (Jarvis Clone)",
"Smart Wheelchair Control using Raspberry Pi and Eye Tracking",
"Raspberry Pi based Fire Detection and Alert System",
"Raspberry Pi Remote Server Monitoring Dashboard",
"Smart Cage Trap with Raspberry Pi for Wildlife Monitoring",
"Raspberry Pi based Automated Exam Hall Seating Arrangement",
"Raspberry Pi Pothole Detection System using Camera",
"Smart Refrigerator Management System using Raspberry Pi",
"Raspberry Pi based Parking Slot Availability Indicator",
"Raspberry Pi Live Streaming Security Camera with Motion Detection",
"Smart Doorbell using Raspberry Pi with Face Recognition",
"Raspberry Pi based Robotic Arm Controlled by Web",
"Raspberry Pi Industrial Machine Predictive Maintenance",
"Smart Water Leakage Detector using Raspberry Pi",
"Raspberry Pi based Earthquake Early Warning System",
"Raspberry Pi Automated Room Light and Fan Controller",
"Smart Luggage Tracker using Raspberry Pi and GPS",
"Raspberry Pi based Blind Stick with Obstacle Detection",
"Raspberry Pi Real-time Animal Intrusion Detection for Farms",
"Smart Patient Health Monitoring System using Raspberry Pi",
"Raspberry Pi based Vehicle Over speed Detector",
"Raspberry Pi Electronic Voting Machine with Biometric",
"Smart Street Light Controller using Raspberry Pi",
"Raspberry Pi based Currency Recognition for Blind",
"Raspberry Pi Drone Flight Controller",
"Smart Attendance System using Raspberry Pi and QR Code",
"Raspberry Pi based Temperature and Humidity Data Logger",
"Raspberry Pi Automated Window Curtain Opener",
"Smart Fire Extinguisher Robot using Raspberry Pi",
"Raspberry Pi based Radar System using Ultrasonic Sensor",
"Raspberry Pi Railway Track Crack Detection System",
"Smart Beehive Monitoring System using Raspberry Pi",
"Raspberry Pi based Virtual Private Network (VPN) Server",
"Raspberry Pi Automated Aquaponics Control System",
"Smart Gym Equipment Usage Tracker using Raspberry Pi",
"Raspberry Pi based Alcohol Detection with Engine Locking",
"Raspberry Pi Real-time Lane Departure Warning System",
"Smart Cradle for Infant Monitoring using Raspberry Pi",
"Raspberry Pi based Pedestrian Crossing Alert System",
"Raspberry Pi Automated School Bell Controller",
"Smart Pesticide Sprayer using Raspberry Pi",
"Raspberry Pi based Solar Tracking System",
"Raspberry Pi Document Scanner with OCR",
"Smart Clothesline Rain Detector using Raspberry Pi",
"Raspberry Pi based Water Level Indicator and Controller",
"Raspberry Pi Automated Fish Feeder",
"Smart Noise Pollution Monitoring System using Raspberry Pi",
"Raspberry Pi based Glucose Level Monitoring",
"Raspberry Pi Blockchain based Data Logging System",
"Smart Restaurant Ordering System using Raspberry Pi",
"Raspberry Pi based Hand Sanitizer Dispenser with Temperature Check",
"Occlusion-Based Cooperative Transport with a Swarm of Miniature Mobile Robots",
"Optimization-Based Motion Planning in Joint Space for Walking Assistance With Wearable Robot",
"Negative Information for Occlusion Reasoning in Dynamic Extended Multi object Tracking",
"Multi robot Control Using Time-Varying Density Functions",
"Passivity and Stability of Human – Robot Interaction Control for Upper-Limb Rehabilitation Robots",
"Head movement controlled car driving system to assist the physically challenged",
"Wireless Robo Pi Landmine Detection",
"Classifying A Person's Degree Of Accessibility From Natural Body Language During Social Human Robot Interactions",
"Multiple Motion Control System Of Robotic Car Based On IOT To Produce Cloud Service",
"Closed-Chain Manipulation of Large Objects by Multi-Arm Robotic Systems",
"Modeling and Simulation of a Moving Robotic Arm Mounted on Wheelchair",
"Managing Robot Kinematics Based on Arm Controllers Using a Unity System",
"Efficient Visual Obstacle Avoidance for Robotic Mower",
"Robotic Assistant for Mobility-Impaired Patients (RAMP)",
"Fire Fighter Robot Project",
"RF Controlled Robotic Vehicle",
"RF Controlled Robotic Vehicle With Metal Detection Project",
"Obstacle Avoider Robotic Vehicle",
"Voice Controlled Robotic Vehicle",
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
"IOT Dog Daycare Robot",
"Android Micro Drone With Obstacle Detector",
"Automatic Whiteboard Eraser Robot",
"Automatic Vacuum Cleaner Robot Project",
"RF Controlled Beach Cleaner Robotic Vehicle",
"Self Balancing Robot Project",
"LIDAR based Autonomous Vehicle with GPS Tracking",
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
"Remote Controlled Robotic Arm",
"Underground Cable Fault Locator",
"Vehicle Speed Monitoring System",
"Wireless Electronic Notice Board",
"GSM Based Home Security System",
"Automatic Railway Gate Controller",
"GPS Vehicle Tracking System",
"Accident Detection and Reporting System",
"Wireless Power Transfer System",
"GPS Soldier Tracking and Health Monitoring",
"AI Based Smart Traffic Management System",
"Drone Based Precision Agriculture System",
"AI Object Detection System",
"IoT Smart Grid Energy Management",
"Autonomous Robot Navigation System",
"Edge AI Object Detection Using Raspberry Pi",
"Gesture Controlled Robotic Arm",
"Multi Robot Communication System",
"LoRa Based Smart Monitoring System",
"Disaster Rescue Robot",
"Mobile Surveillance Robot",
"Autonomous Delivery Robot",
"Smart Warehouse Automation System",
"Industrial IoT Monitoring System",
"Smart Energy Management System",
"AI Based Security Surveillance System",
"Raspberry Pi based home surveillance system",
"IoT based air quality monitoring system",
"Gesture controlled robotic arm using accelerometer",
"RFID based access control system using Arduino",
"Voice controlled home automation using Google Assistant",
"Smart door lock with OTP using GSM and Arduino",
"Fingerprint based biometric attendance system",
"Real time GPS tracking system for vehicle",
"IoT based weather station using ESP8266",
"IoT based smart garbage monitoring system",
"IoT based energy meter monitoring (low voltage only)",
"Pick and place robot using robotic arm",
"Mobile controlled robot using DTMF decoder",
"Fire fighting robot with water sprayer",
"Wall climbing robot using suction mechanism",
"Swarm robotics for cooperative task completion",
"Hexapod robot using servo motors and Arduino",
"Line following robot with PID control",
"Raspberry Pi based image processing robot",
"Robotic arm controlled by hand gestures using flex sensors",
"Self balancing robot using MPU6050 gyroscope",
"Surveillance robot with wireless camera",
"Robotic vacuum cleaner using IR sensors",
"Human following robot using ultrasonic and IR sensors",
"4-DOF robotic arm for pick and place operation",
"Spy robot with live video streaming via Wi-Fi",
"Solar powered agricultural robot for seed sowing",
"Robotic fish for underwater monitoring",
"Maze solving robot using left-hand rule algorithm",
"IoT based smart irrigation system",
"Home automation using NodeMCU and Blynk app",
"Smart water level monitoring and control",
"IoT based air pollution detector using MQ135",
"Smart helmet for workers with fall detection",
"IoT enabled dustbin for waste segregation",
"IoT based gas leakage detector with alarm",
"Wi-Fi controlled robot using ESP8266",
"Real time patient health monitoring system",
"IoT based fire detection and alert system",
"Smart fridge inventory management using RFID",
"LoRa based long range data transmission",
"ZigBee based wireless sensor network for agriculture",
"GSM based home security alarm system",
"IoT based PIR motion detector for intruder alert",
"Wireless power transfer via inductive coupling (low power)",
"Metal detector robot using inductive sensor",
"Alcohol detection system with engine locking",
"Color sorting machine using TCS3200 sensor",
"Smart temperature controller for incubator",
"Vibration measurement system using accelerometer",
"Rain sensing automatic wiper for vehicles",
"Soil nutrient detection using optical sensor",
"Heart rate and SpO2 monitor using MAX30100",
"Distance measurement using VL53L0X time-of-flight sensor",
"CO2 monitoring using MG811 sensor for greenhouses",
"Pressure sensitive floor mat for people counting",
"Hall effect sensor based speedometer for bicycle",
"Load cell based digital weighing machine",
"DTMF based remote control for appliances",
"Infrared based wireless audio transmitter",
"VHF antenna design for amateur radio",
"RF based remote control for robotic vehicle",
"Voice over internet protocol (VoIP) using Raspberry Pi",
"Audio equalizer using op-amp filters",
"An IOT Based Multi-parameter Data Acquisition System For Efficient Bio-tele Monitoring Of Pregnant Women At Home",
"Autonomous theft proof delivery robot for food & ecommerce",
"Body and fall detection system with heart rate monitoring",
"Automated traffic ticket checking system using IoT",
"Smart Ration Card System Using RFID and Embedded System",
"Intrusion detection in military border and agriculture field",
"A Conveyor-belt Based Pick-and-sort Industrial Robotics Application",
"Drunken Driving Detection Using Car Ignition Locking",
"An RFID based smart EVM system for reducing electoral frauds",
"Intelligent food and grain storage management system for the warehouse and cold storage",
"Arduino based vehicle seat vacancy identification",
"A Design of Intelligent Wearable Health Monitoring System Based on IOT",
"Development of congestion level based dynamic traffic management system using IOT",
"Intelligent Monitoring Systems for Transportation of Perishable Products based Internet of Things(IOT) Technology",
"IOT Based Real-Time Remote Patient Monitoring System",
"IOT Based University Garbage Monitoring System for Healthy Environment for Students",
"IOT Based Wireless Sensor Network for Air Pollution Monitoring",
"IOT-Enabled Shipping Container with Environmental Monitoring and Location Tracking",
"Real-time Wireless Embedded Electronics for Soldier Security",
"Smart Farming System using IOT for Efficient Crop Growth",
"Multi-Functional Blind Stick for Visually Impaired People",
"IOT-aware Waste Management System based on Cloud Services and Ultra-low power RFID Sensor-Tags",
"Analysis of Smart helmets and Designing an IOT based smart helmet: A cost effective solution for Riders",
"The Design and Implementation of GPS Controlled Environment Monitoring Robotic System based on IOT and ARM",
"Autonomous Energy-Efficient Wireless Sensor Network Platform for Home/Office Automation",
"A Novel Approach to Provide Protection for Women by using Smart Security Device",
"IOT water pollution monitor RC boat",
"IOT Contactless COVID temperature testing system",
"IOT early flood detection & avoidance system",
"IOT based ICU patient monitoring system",
"Contactless IOT doorbell",
"IOT garbage segregator & bin level indicator",
"Driver Drowsiness Detection System for Accident Prevention",
"Drink & drive detection with ignition lock project",
"Swatch Bharat using GSM",
"Red sandalwood protector using metal detector with GSM",
"Crop monitoring using GSM",
"Crop Protection system from Wild Animals",
"Paralysis patient monitoring system",
"Patient Health Monitoring system modern Village",
"Garbage monitoring system",
"Water quality monitoring in aquaculture",
"Automatic pet feeder with live streaming",
"Development Of Device For gesture to Speech conversion for the mute community",
"Soldier health & position tracking system",
"Renewable energy monitoring system",
"Design and implementation of hybrid Solar wind power system",
"Accident Detection System Using GPS and GSM with automatic update to ambulance",
"Car Parking Monitoring System using IOT",
"Vehicle Tracking System Using RFID for theft Avoidance",
"Engine Locking System Using GSM technology",
"Accident detection system using GSM",
"Voice controlled home automation using Google voice assistant",
"Prepaid energy meter using GSM",
"Voice controlled led notice board",
"Smart shopping system Technology",
"GSM based vehicle fuel theft detection system",
"Finger print based door lock",
"Fingerprint based authentication",
"Fingerprint and keypad based security Access system",
"Rescue child from deep bore well",
"IOT based home automation",
"IOT based home security",
"IOT based environment monitoring",
"IOT based health care monitoring",
"IOT home security with web cam",
"IOT based smart robot using Wi-Fi module",
"Women safety device with GPS tracking & Alerts",
"Drone with remote control",
"Pick and place robot",
"Remote controlled grass cutter robot",
"House cleaning robot",
"Solar powered electric vehicle",
"Drainage cleaning robot",
"Water sprinkling robot",
"Solar powered bomb detecting robot",
"Seed sowing robot",
"Railway track fault detecting system Using LED &LDR",
"Firefighting robot",
"Hand motion controlled robotic vehicle",
"Sun tracking solar panel using Arduino",
"Arduino based autonomous firefighting robot",
"SMS based Fire Department Alerting System",
"SMS based Irrigation Monitoring &Controller System",
"SMS based Garbage Monitoring System",
"Arduino based system to measure solar power",
"Vehicle Movement based Street Light Control",
"Accident Identification and alerting project",
"LPG Gas Accident Prevention With GSM alert",
"Voice controlled Load control system(with android app)",
"Automatic railway platform system using IOT",
"Alcohol detection and alert system for avoiding accidents using GSM",
"Seed sowing robot for farmers wind power generation and harvesting",
"Automatic school Board cleaner system",
"An advanced system to rescue bore well victims",
"Metal/Bomb detection robot",
"Solar Powered LDR based Automatic street light system",
"Fuse blown indicator and alerting system",
"Boat with remote control",
"Solar powered(sun light based) water desalination system",
"Automatic spike system near traffic signals",
"A Sewer Sensor Monitoring System Based on embedded System",
"A smart monitor system that measures industrial machine pressure and vibration using IOT",
"A Smart Optimization of Fault Diagnosis in Electrical Grid Using distributed software- Defined IOT system",
"Aadhar Based Fingerprint Electronic voting system",
"Advanced IOT Based Combined Remote Health Monitoring, Home Automation and Alarm System",
"Advanced Smart Energy Saving System for Modern railway station platform",
"Advanced Traffic Violation Control and penalty system with Web Server",
"An Efficient Smart Irrigation System for solar system by using GSM",
"Analysis and Testing of Dual Axis Solar Tracker For a Standalone PDV System",
"Anti-Theft technology of museum cultural relics based on internet of things",
"ATM Terminal Design Is Based On fingerprint recognition",
"Automated smart sericulture for enhancement of silk production using embedded system",
"Automatic Fault Detection and Location of Transmission Lines using IOT",
"Automatic gas cylinder booking over IOT",
"Automatic Pathway for Emergency Vehicle",
"Automatic waste segregation system",
"Automation of Floor Cleaning Robot",
"Bird Feeder and Poultry Conditioning monitoring using Embedded system",
"Design & Implementation of IOT Based smart helmet for Road Accident Detection",
"Design and Development Of Agri-Bot For Automatic ploughing, seeding and watering",
"Design and implementation of a vehicle to vehicle communication system using LiFi Technology",
"Design of a Monitoring System Using Pill Bottle Mounted Wireless Sensors",
"Design of Piezoelectricity Harvester using footwear",
"Design of wind power generation system using IOT",
"Disinfecting Robot with Ultraviolet Lights",
"Dual Axis Solar Tracking System with weather monitoring",
"Embedded Based Vehicle Speed Control system using Wireless Technology",
"Finger print based door open system",
"Fingerprint based exam hall authentication",
"Forest Monitoring By Hierarchical wireless sensor Network",
"Garbage collector robot",
"Garbage Monitoring system using GSM",
"Gesture Vocalizer for Dumb People",
"Health Care System for Home Quarantine People",
"Heart Attack and Alcohol Detection Sensor Monitoring in Smart Transportation System using Internet of Things",
"Heart Attack Detection by Heartbeat Sensing using IOT",
"Integrated solar food drying system",
"Intelligent Monitoring System for NICU (Neonatal Intensive Care Unit)",
"Intelligent Traffic Signal Control System for ambulance Using IOT",
"IOT based Organic Farming by using aquaponics Method",
"IOT Based Smart Helmets for construction workers",
"IOT Based Smart Multi Application surveillance robot",
"IOT Based Smart Museum using Bluetooth low energy",
"IOT based Smart Road intelligent highways with Monitoring Messages",
"IOT Based Street Lighting And traffic management System",
"IOT: A Novel Strategy for Biometric Voting system",
"IOT-BBMS: Internet Of Things-Based baby monitoring System For Smart Cradle",
"IOT-Enabled Shipping Container with environmental Monitoring and Location Tracking",
"Junction street light system automatic control Using renewable energy resource",
"Low Cost Robotic Agent Design for Disabled and Covid-19 Affected people",
"Low power Smart Vehicle Tracking, Monitoring, Collision avoidance and Antitheft System",
"Medicine Reminder and Monitoring System for secure Health using IOT",
"Microcontroller based greenhouse monitoring and controlling system",
"Mobile Alarm for gas leak Detection",
"Monitoring & Controlling of Substation using IOT in Distribution Power Grid",
"Multi-Functional Blind Stick for visually impaired People",
"Novel wearable sensor device for continuous monitoring of cardiac activity during sleep",
"Patient Monitoring System for Home quarantine people",
"Poultry Monitoring and Controlling System",
"Renewable Energy Based Wireless power transfer",
"RFID and GPS Combination Approach Implementation in Fisher Boat Tracking System",
"RFID Based Attendance System With automatic door Unit",
"Robotic Arm for inspection, cleaning and painting of tanks on ships to save on time, cost And avoid accidents",
"School Zone Alert with Announcements",
"Secure Fingerprint Bank Locker With image capture",
"Smart Bag for Women Safety",
"Smart Healthcare Patient Data Privacy and security system using IOT",
"Smart Helmet with Accident Detection",
"Smart Management of Street lights for energy conservation using IOT",
"Smart solar grass cutter with lawn coverage",
"Smart speaking glove",
"Smart Speed Setter and Calibrator for speed control devices",
"Smart Waste Management System using NODEMCU",
"Smart water controller in metro water supply lines",
"SMS based Voting System",
"Social Distancing & Monitoring Robot for queue",
"Solar Based Automatic Irrigation Robot for farm monitoring",
"Solar Dryer Alarm for the safety of food",
"Solar panel with sun position tracking",
"Solar Powered Automated Multi-tasking agricultural Robot",
"The high security smart helmet using internet of things",
"The Smart Mailbox with Motion controlled security Camera",
"Three Phase Fault Analysis with Auto Reset for Temporary Fault and Trip for Permanent Fault",
"Tongue controlled speaking robot for paralyzed/physically handicapped persons",
"Transmission of Data Using Li-Fi",
"Tripping Mechanism of Over Voltage and under voltage System",
"Ultrasonic Spectacles and Waist-belt for visually impaired and Blind Persons",
"UV sterilization robot",
"Vehicle and license authentication using fingerprint",
"Vehicle black box system With IOT",
"Vehicle Theft Detector with Remote engine locking",
"Voice Control 230v Lamp Dimmer with 10 Level of Intensity Control Using Android App",
"Voice controlled car using Arduino",
"Driver behavior monitoring and warning with dangerous driving detection based on the internet of vehicles",
"IOT based real-time remote patient monitoring system",
"IOT based smart factory management system",
"Smart pothole detector",
"Smart farming system using IOT for efficient crop growth",
"Surveillance monitoring using esp32",
"Creating artificial environment for high productivity of plants and monitoring using IOT",
"Arduino Uno based water quality monitoring and flood alerting system using IOT",
"Air quality monitoring system",
"Electrical multipurpose agriculture vehicle",
"Smart solution to prevent the fast spread of covid-19 in workplaces",
"Password based door locking system using Arduino",
"Design of smart and automated seed sowing and grass cutting rover",
"Ultraviolet sanitization machine",
"E-thaap-automatic temperature measuring device",
"Smart public transport",
"Pet care unit- an automated feeding system using Bluetooth module",
"Detection of gas level, leakage and booking using IOT",
"Design of microcontroller based agri-bot and robotic hand",
"Application of real time clock (RTC timer) in the streetlight management using IOT",
"Automobile reverse wheel locking system",
"IOT based automated fuel station using RFID",
"Multipurpose robot",
"Railway track crack detection mechanism",
"Prevention of railway accidents by automatic gate control using IOT",
"IOT based industrial monitoring system using Arduino",
"Vehicle accident alert system using GSM, GPS and MEMS",
"Advanced billing smart meter for electricity, water, and gas using GSM",
"Digital notice board using IOT",
"Eye blinking monitoring system for vehicle accident prevention",
"Microcontroller based design and development of a real time body temperature and heart rate monitoring system",
"Smart shopping trolley using RFID reader and NODE MCU",
"Solar air process heating systems for drying of agricultural products",
"Design and implementation of modernization of agriculture and crop protection using IOT",
"Harvesting solar energy using dual axis solar tracker with added real-time monitoring through GSM",
"License based vehicle ignition system 2",
"Design and implementation of low cost IOT based smart refrigerator",
"Solar based robotic arm using microcontroller",
"A literature survey on: walking aid stick for visually challenged people",
"Analysis and designing of IOT based smart helmet",
"Development of automated hydroponic system for smart agriculture",
"Automated bottle filling machine",
"Rash driving detection system on highway",
"IOT based automated hydroponic system",
"IOT based smart kitchen",
"Bridge health monitoring system using IOT",
"Design of automatic motorbike stand slider",
"Smart wheelchair with medicine reminder and autopilot system",
"An Embedded System Based Monitoring System For Industries By Interfacing Sensors with IOT environment",
"Real time agriculture environment for social moderation of Indian agriculture system using ZIGBEE technology",
"Smart Trash Container for Smart Homes and Cities –Real time concept",
"Automated Irrigation System In Agriculture Using Wireless sensor technology",
"A survey of wireless communications and propagation modeling in underground mines",
"Automated phone of diabetes patients readings / consultant monitoring via the web",
"Robot Position Estimation On A RFID-Tag System In Smart Floor for Industries",
"The Design And Implementation Of Intelligent Campus security tracking System Based On RFID and ZIGBEE",
"Data Acquisition SystemOf EnergyMeter With wireless communication For Smart metering application",
"Real time paddy crop field monitoring using ZIGBEE network",
"Search And Rescue Robot For Victims Of Earthquake And other natural Calamities With remote virtual",
"WIFI Based Communication And Localization Of An Autonomous Mobile Robot For refinery inspection",
"Reliability Of An Embedded Surveillance System With security approach",
"A Remote Measurement And Control System For Greenhouse based on GSM-SMS",
"A ZIGBEE-based wearable physiological parameters monitoring system",
"Industrial parameter monitoring system using can",
"Design and implementation of an embedded home surveillance system with ultra-low alert power",
"Distributed remote temperature monitoring and acquisition system based on can bus",
"Collide information capturing for vehicle using GSM, GPS, and MEMS technology",
"Security integrated system based on wireless access protocol for industrial applications with sms alert system using GSM modem",
"ZIGBEE based industrial automation",
"Construction Of Central Control Unit For Irrigation Water Pumps. Cost Effective Method To Control Entire Villager’s water pumps",
"With user level authentication",
"Implementation of hi-tech agricultural solar fence security with",
"Soil Humidity Based Automatic Irrigation and Voice Announcement Alert On PIR Live Human Detection.",
"Remote-control system of high efficiency and intelligent street lighting using a ZIGBEE network of devices and sensors",
"Automated control system for air pollution detection in vehicles",
"Lobot: low-cost, self-contained localization of small-sized ground",
"Robotic vehicles",
"Vehicle health monitoring system using can",
"Design of vehicle bus data acquisition and fault diagnosis system using can.",
"Safe driving using mobile phones",
"Reservation based vehicle parking system using GSM and RFID",
"Technology",
"Multi-functional monitoring system",
"Multi-level anti-Theft Security System Using GSM Technology",
"Design of vehicle bus data acquisition and fault diagnosis system using can",
"A design of wireless intelligent control system for service robots",
"Real time paddy crop field monitoring using ZIGBEE network",
"Guard Alert, monitoring and reporting system with GSM technology",
"Development on gas leak detection and location system based on wireless sensor networks",
"Design of a wireless medical monitoring system",
"A ZIGBEE based smart sensing platform for monitoring environmental parameters",
"Design of vehicle positioning system based on arm",
"Design And Implementation Of an Embedded Home Surveillance System With Ultra-Low Alert Power",
"The design and implementation of a teacher-student interaction system based on ZIGBEE and RFID",
"Secured wireless communication for industrial automation and control",
"Design & development of GSM based vehicle theft control system",
"A remote sleep monitoring medical alarm system",
"The system of wireless smart house based on GSM and ZIGBEE",
"Role of wireless sensor networks in forest fire prevention",
"Temperature Monitoring In Wireless Sensor network Using ZIGBEE Transceiver Module",
"Mobile monitoring system for smart home",
"Automatic toll collection with complex security system",
"Intelligent wireless mobile patient monitoring system",
"Automatic power meter reading system using GSM network",
"Next generation ad-hoc wireless chatting system using touch screen",
"Traffic density analyzer cum signal system for metro cities using GSM technology.",
"Collide information capturing for vehicle using GSM, GPS and MEMS.",
"An intelligent road traffic control system for ambulance using RF",
"Mobile monitoring for smart home using GSM technology",
"ZIGBEE based smart meter reading system",
"Multi sensor Robot Using ZIGBEE.",
"Orchid soil moisture monitoring system based on GSM technology",
"ATM security system using GSM & MEMS technology.",
"A remote home security system based on wireless sensor network and GSM technology.",
"Wireless electronic notice board with multi point receivers using ZIGBEE communication system.",
"System using real time agriculture environment for social moderation of Indian agriculture ZIGBEE technology",
"Industrial automation using can protocol",
"GSM based wireless home appliances monitoring &control system",
"Remote notice board implementation using GSM communication",
"Remote parent care system using RFID& GSM technology",
"Measurement of agriculture applications using ZIGBEE",
"Weather Station Design Using ZIGBEE",
"Biometric identification for ballot mark recognition.",
"A remote measurement and control system for greenhouse based on GSM-sms.",
"RFID bank ATM system (draft generating) and ATM device controlling",
"GSM & GPS technology based accident detection system and release airbags.",
"GSM based advanced security system for banks",
"based patient monitoring system",
"Security integrated system based on wireless access protocol for industrial applications with sms alert system using GSM modem",
"RFID based license management system.",
"Authenticated remote operated device management using GSM technology",
"Barcode access Control Security System",
"Artificial vision systems for the blind using ultra sonic waves",
"Digital voice recorder using ISD1820",
"Low power FM receiver using TEA5767",
"Ultrasonic based wireless data transmission",
"Li-Fi audio transmission using LED and photodiode",
"Real time audio spectrum analyzer using Arduino",
"GSM based SMS controlled switch",
"GPS based location sharing via SMS",
"Wireless mouse using accelerometer and RF module",
"IR remote controlled decoder using TSOP1738",
"Audio visualizer using LED strip and microphone",
"Touch tone controlled home appliances",
"Digital signal processing on ARM microcontroller",
"POV display using LEDs and motor",
"Touch screen based menu selection using TFT LCD",
"Character LCD based voting machine",
"Graphical LCD based ECG simulator",
"Voice controlled servo motor for CCTV pan tilt",
"Barcode scanner using camera module and Raspberry Pi",
"Autonomous maze solving robot using Q-learning",
"Object following robot using computer vision (OpenCV)",
"Robotic arm controlled by EEG headset",
"Gesture controlled wheelchair for disabled",
"Voice controlled robotic car using Alexa",
"Raspberry Pi based face recognition door lock",
"Edge detection robot for line following with camera",
"Drone with obstacle avoidance using ultrasonic",
"Robotic hand controlled by muscle sensor (EMG)",
"Ball balancing robot using PID and IMU",
"Artificial intelligence based floor cleaning robot",
"Robotic arm with color sorting capability",
"Telepresence robot using tablet and Arduino",
"Robotic fish controlled by Bluetooth",
"Snake robot for pipeline inspection",
"Robotic gripper with force sensing resistor",
"Sumo robot using edge detection and IR sensors",
"Omnidirectional robot using mecanum wheels",
"Robotic arm with 6 DOF and inverse kinematics",
"Autonomous drone for crop monitoring",
"Data logger for temperature and humidity using SD card",
"Voice recorder and playback using APR33A3",
"Flood water level alert system using ultrasonic",
"Earthquake detection system using piezoelectric sensor",
"Smart mirror displaying time, weather and news",
"Fingerprint based bank locker system",
"RFID based library management system",
"Railway level crossing gate control using IR sensors",
"Bidirectional speed measurement of conveyor belt",
"Dimmer switch using TRIAC and zero crossing detection",
"Capacitance meter using 555 timer",
"Frequency counter using Arduino",
"Two wheel self balancing robot",
"Simple pick and drop robot using gripper",
"Wireless surveillance rover using Wi-Fi camera",
"Robotic arm controlled by joystick",
"Four wheel drive robot with speed control",
"Mini sumo robot using IR sensors",
"Gesture based car using accelerometer",
"Raspberry Pi based robot with web interface",
"Mobile controlled robot using DTMF",
"RF controlled robot for industrial inspection",
"Automatic fire extinguisher robot",
"Smart glove for speech impaired using flex sensors and text to speech",
"Gesture controlled prosthetic hand",
"IoT based smart medicine box with reminders",
"Real time drowsiness detection for drivers using eye blink sensor",
"Wearable fall detection system for elderly using MPU6050",
"Autonomous trash picking robot with camera",
"Smart dustbin that opens automatically using ultrasonic",
"IoT based smart helmet for bike safety",
"Voice controlled smart wheelchair",
"Home automation using clap and voice commands",
"RFID based automatic toll collection system",
"Smart shopping cart with billing using RFID",
"Real time language translator using Raspberry Pi",
"Edge AI based object classification on Raspberry Pi",
"Facial recognition based security system using OpenCV",
"Automatic number plate recognition (ANPR) system",
"Text to speech converter for visually impaired",
"Smart walking stick with obstacle detection and GPS",

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

    const savedBookmarks = JSON.parse(localStorage.getItem("ayshtro_ee_bookmarks") || "[]");

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
            let bookmarks = JSON.parse(localStorage.getItem("ayshtro_ee_bookmarks") || "[]");
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
            localStorage.setItem("ayshtro_ee_bookmarks", JSON.stringify(bookmarks));
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

/* ─── Shuffle array (Fisher-Yates) ─── */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/* ─── Refresh / shuffle topics ─── */
function refreshTopics() {
    currentTopics = shuffleArray([...fullTopicsList]);
    currentFiltered = [...currentTopics];
    renderTopics(currentFiltered);
    const searchBox = document.getElementById('search-input');
    if (searchBox) searchBox.value = "";
    showFloatingMessage("🔄 Topics shuffled!");
    const icon = document.querySelector('#refresh-button i');
    if (icon) {
        icon.style.transition = 'transform 0.5s ease';
        icon.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            icon.style.transform = '';
        }, 500);
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

    // Auto-shuffle on page load
    currentTopics = shuffleArray([...fullTopicsList]);
    currentFiltered = [...currentTopics];
    renderTopics(currentFiltered);

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

    // Live search on input
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