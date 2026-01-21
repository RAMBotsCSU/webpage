<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-tabs v-model="tab" color="primary">
                    <v-tab v-for="(year, index) in years" :key="index">{{ year.title }}</v-tab>
                </v-tabs>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-card width="100%">
                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item v-for="(year, index) in years" :key="index" :value="index">
                                <div>
                                    <GallerySection v-for="section in year.sections" :key="section.title"
                                        :title="section.title" :cards="section.cards" />
                                </div>
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import GallerySection from '../components/GallerySection.vue'

export default {
    components: {
        GallerySection
    },
    data() {
        return {
            tab: 0,
            years: [
                {
                    title: '2025/2026',
                    sections: [
                        {
                            title: 'Testing', cards: [
                                { title: 'Working on Sparky', src: require('@/assets/AY25/gallery/festival1.jpg')},
                                { title: 'Sparky walking analysis', src: require('@/assets/AY25/gallery/sparky_walk_testing.png')},
                                { title: 'Sparky push up testing', src: require('@/assets/AY25/gallery/pushup_testing.png')}
                            ]
                        },
                        {
                            title: 'Construction', cards: [
                                { title: 'Fixing Sparky', src: require('@/assets/AY25/gallery/hard_at_work.jpg')},
                                { title: 'Assembling new wires', src: require('@/assets/AY25/gallery/assemblewires.png')},
                                { title: 'Sparky with new upgrades', src: require('@/assets/AY25/gallery/sparky_new_wires.jpg')},
                                { title: 'New Teensy Enclosure w/ PCB', src: require('@/assets/AY25/gallery/pcb.jpg')}  
                            ]
                        },
                        {
                            title: 'Events', cards: [
                                { title: 'Festival at the Oval', src: require('@/assets/AY25/gallery/festival3.jpg')},
                                {title: 'AI/Robotics Symposium', src: require('@/assets/AY25/gallery/ai_robotics_symposium.jpeg')},
                                { title: 'ECE Community Connections Night', src: require('@/assets/AY25/gallery/eccn.jpg')}
                            ]
                        },
                        {
                            title: 'Team', cards: [
                                { title: 'Year 5 Team Seniors', src: require('@/assets/AY25/Rambot_Team_photo.png') },
                            ]
                        }
                        
                    ]
                },
                {
                    title: '2023/2024',
                    sections: [
                        {
                            title: 'Testing', cards: [
                                { title: '1st Walk Test', src: require('@/assets/year3/gallery/testing/firstWalkTest.jpg') },
                                { title: 'Measuring for New Stand', src: require('@/assets/year3/gallery/testing/measurements.jpg') },
                                { title: 'Testing the 5th Leg', src: require('@/assets/year3/gallery/testing/testing5thLeg.jpeg') }
                            ]
                        },
                        {
                            title: 'Construction', cards: [
                                { title: 'Disassembled', src: require('@/assets/year3/gallery/construction/dissassembled.jpg') },
                                { title: 'Fixing a Leg', src: require('@/assets/year3/gallery/construction/fixingLeg.jpg') },
                                { title: 'Fifth Leg Layout', src: require('@/assets/year3/gallery/construction/5thLeg.jpg') },
                                { title: 'Coding the Tennis Ball Tracking', src: require('@/assets/year3/gallery/construction/mlCoding.jpg') }
                            ]
                        },
                        {
                            title: 'Events', cards: [
                                { title: 'Sparky meeting Amy Parsons', src: require('@/assets/year3/gallery/events/amyParsons.jpg') },
                                { title: 'Sparky meeting Cam the Ram', src: require('@/assets/year3/gallery/events/sparkyCam.jpg') },
                                { title: 'Demonstration', src: require('@/assets/year3/gallery/events/Demonstrate.jpg') },
                                { title: 'ECE Nights', src: require('@/assets/year3/gallery/events/ECENight.jpeg') }
                            ]
                        },
                        {
                            title: 'Team', cards: [
                                { title: 'Year 3 Team Seniors', src: require('@/assets/year3/team/year3_seniors.jpg') },
                                { title: 'Year 3 Full Team', src: require('@/assets/year3/team/year3_full.jpg') },
                            ]
                        }
                    ]
                },
                {
                    title: '2022/2023',
                    sections: [
                        {
                            title: 'Testing', cards: [
                                { title: 'Preparing to walk', src: require('@/assets/gallery/preparing_to_walk.jpg') },
                                { title: 'Walking on the stand', src: require('@/assets/gallery/walking_on_stand.jpg') },
                                { title: 'Bot standing', src: require('@/assets/gallery/rambot_standing.jpg') },
                                { title: 'Working on the robot', src: require('@/assets/gallery/assembling_the_bot.jpg') },
                                { title: 'Using the oscilloscope', src: require('@/assets/gallery/oscilloscope_with_EIR.jpg') },
                                { title: 'Leg programming setup', src: require('@/assets/gallery/leg_programming_setup.jpg') },
                            ]
                        },
                        {
                            title: 'Construction', cards: [
                                { title: 'Chassis side view', src: require('@/assets/gallery/chassis.jpg') },
                                { title: 'Chassis diagonal view', src: require('@/assets/gallery/chassis2.jpg') },
                                { title: 'Assembling the robot', src: require('@/assets/gallery/robot_assembly.jpg') },
                                { title: 'Programming the Pi', src: require('@/assets/gallery/pi_programming.jpg') },
                                { title: 'Disassembling a leg for testing', src: require('@/assets/gallery/leg_testing.jpg') },
                                { title: 'Meeting with EIR', src: require('@/assets/gallery/eir_meeting.jpg') },
                            ]
                        },
                        {
                            title: 'Art', cards: [
                                { title: 'Logos by Gwyn Tari', src: require('@/assets/gallery/RamLogoLarge.png') },
                                { title: ' ', src: require('@/assets/gallery/RamLogoMed.png') },
                                { title: '', src: require('@/assets/gallery/RamLogoSmall.png') },
                            ]
                        },
                        {
                            title: 'Team', cards: [
                                { title: 'Year 2 Team Seniors', src: require('@/assets/team_seniors.jpg') },
                                { title: 'Year 2 Full Team', src: require('@/assets/year2/team_full.jpg') },
                            ]
                        }
                    ]
                }
            ]
        }
    },
}
</script>
