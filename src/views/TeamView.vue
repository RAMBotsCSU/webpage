<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-tabs v-model="tab" color="primary">
                    <v-tab v-for="(year, index) in years" :key="index">{{ year.title }}</v-tab>
                </v-tabs>
            </v-col>
        </v-row>
        <v-window v-model="tab">
            <v-window-item v-for="(year, index) in years" :key="index" :value="index">
                <v-row class="justify-center">
                    <v-col cols="12" class="text-center mt-4">
                        <v-text class="font-weight-medium text-h5">Seniors</v-text>
                    </v-col>
                </v-row>
                <v-divider class="my-4"></v-divider>
                <v-row class="d-flex justify-center">
                    <v-col class="d-flex justify-center" :cols="$vuetify.display.mobile ? 12 : 3"
                        v-for="card in year.seniors" :key="card.title">
                        <TeamMemberCard :card="card" />
                    </v-col>
                </v-row>
                <div v-if="year.vips && year.vips.length">
                    <v-row class="justify-center">
                        <v-col cols="12" class="text-center mt-4">
                            <v-text class="font-weight-medium text-h5">VIPs</v-text>
                        </v-col>
                    </v-row>
                    <v-divider class="my-4"></v-divider>
                    <v-row class="d-flex justify-center">
                        <v-col class="d-flex justify-center" :cols="$vuetify.display.mobile ? 12 : 3"
                            v-for="card in year.vips" :key="card.title">
                            <TeamMemberCard :card="card" />
                        </v-col>
                    </v-row>
                </div>
                <v-row class="justify-center text-center">
                    <v-col :cols="$vuetify.display.mobile ? 12 : 4">
                        <v-row class="justify-center">
                            <v-col cols="12" class="text-center mt-4">
                                <v-text class="font-weight-medium text-h5">Advisor</v-text>
                            </v-col>
                        </v-row>
                        <v-divider class="my-4"></v-divider>
                        <p>{{ year.advisor }}</p>
                    </v-col>
                    <v-col :cols="$vuetify.display.mobile ? 12 : 4">
                        <v-row class="justify-center">
                            <v-col cols="12" class="text-center mt-4">
                                <v-text class="font-weight-medium text-h5">Industry Members</v-text>
                            </v-col>
                        </v-row>
                        <v-divider class="my-4"></v-divider>
                        <p v-for="member in year.industryMembers" :key="member">{{ member }}</p>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-card>
                            <v-img cover :src="year.teamImage"></v-img>
                        </v-card>
                    </v-col>
                </v-row>
            </v-window-item>
        </v-window>
    </v-container>
</template>

<script>
import TeamMemberCard from '../components/TeamMemberCard.vue'

export default {
    components: {
        TeamMemberCard,
    },
    data() {
        return {
            tab: 0,
            years: [
                {
                    title: '2024/2025',
                    seniors: [
                        {
                            title: 'McKenzy Johnson',
                            src: require('@/assets/AY24/headshots/mckenzy.jpg'),
                            resume: './resumes/mckenzy_johnson.pdf',
                            linkedin: "mckenzy-johnson-2881751a5",
                            email: 'mckenzypaige@gmail.com',
                            text: "I am completing the last semester (Fall '24) of my Computer Engineering B.S. with a minor in Machine Learning. I’m passionate about developing systems where hardware and software interact seamlessly to create optimized, dynamic control solutions. In my free time, I enjoy hiking, strategy games, and taking on new projects or challenges."
                        },
                        {
                            title: 'Saige Morlang',
                            src: require('@/assets/AY24/headshots/saige.jpg'),
                            text: "I am currently a senior electrical engineering major with a focus on power engineering and SCADA systems. I enjoy leveraging my skills to improve automation and control systems both in school and in the power industry. Outside of studies and work, I enjoy spending time with family, exploring the outdoors near Fort Collins, and recording my own original music.",
                        },
                        {
                            title: 'Chris Mills',
                            src: require('@/assets/AY24/headshots/chris.jpg'),
                            text: "I am a senior Computer Engineer at CSU. In my free-time I enjoy playing guitar and playing sports.",
                        },
                        {
                            title: 'Christopher Moses',
                            src: require('@/assets/AY24/headshots/christopher.jpg'),
                            text: "My name is Christopher and I am a senior majoring in Electrical Engineering with a focus in power systems. I am a big fan of the Colorado sports teams and I also enjoy hiking, biking, and playing music in my free time.",
                        },
                        {
                            title: 'Drew Achtermann',
                            src: require('@/assets/AY24/headshots/drew.jpg'),
                            linkedin: "glue",
                            email: 'drew@oceanmail.net',
                            github: 'unex',
                            text: "I am a senior in Electrical Engineering, my interests include but are not limited to power and control systems.",
                        },
                        {
                            title: 'Adrian Pastella',
                            src: require('@/assets/AY24/headshots/adrian.jpg'),
                            resume: './resumes/adrian_pastella.pdf',
                            linkedin: "adrianpastella",
                            email: 'adrian.pastella@outlook.com',
                            text: "My name is Adrian and I am a senior finishing up my Computer Engineering degree. I enjoy tinkering with electronics, programming, and discovering the wonderful world of machine learning. In my free time you can find me making music, art, or exploring the outdoors.",
                        },
                    ],
                    vips: [
                        {
                            title: 'Joey Reback',
                            src: require('@/assets/year3/headshots/joey_reback.jpg'),
                            linkedin: "joseph-reback-54327b250",
                            email: 'jreback@colostate.edu',
                            text: "I'm a junior in Computer Engineering at CSU. I'm interested in working in robotics, aerospace, and embedded systems. I'm a huge Colorado sports fan and in my free time I like running, electronics repair, and backpacking."
                        },
                        {
                            title: 'Jason Taylor',
                            src: require('@/assets/AY24/headshots/jason.jpg'),
                            linkedin: "jason-taylor-7aa0982a4",
                            email: 'Jason.Taylor@colostate.edu',
                            text: "I’m a junior in Mechanical Engineering. I am interested in aerospace and fluid mechanics. Outside of classes, I like playing video games, listening to music, and going to the gym.",
                        },
                    ],
                    advisor: 'Olivera Notaros',
                    industryMembers: ['Jon Lotz', 'Hugh Wallace'],
                    teamImage: require('@/assets/AY24/team_full.png')
                },
                {
                    title: '2023/2024',
                    seniors: [
                        {
                            title: 'Anna Biolchini',
                            src: require('@/assets/year3/headshots/anna_biolchini.jpg'),
                            linkedin: "anna-biolchini",
                            text: "I am a senior studying Electrical Engineering and I am a co-captain of the RamBOTs team. I am interested in aerospace, circuit design and analysis, control systems, and pushing technology further. In my free time, I love to hike, read, and try new things."
                        },
                        {
                            title: 'Elaine Smith',
                            src: require('@/assets/year3/headshots/elaine_smith.jpg'),
                            resume: './resumes/elaine_smith.pdf',
                            linkedin: "elaine-smith-csu",
                            email: "elaines@1colostate.edu",
                            text: "I am a senior in Electrical Engineering with a second major in Computer Science. I am interested in digital logic, software, and embedded systems. In my free time, I like drumming, playing video games, and stargazing."
                        },
                        {
                            title: 'Aironas Bilevicius',
                            src: require('@/assets/year3/headshots/aironas_bilevicius.jpg'),
                            resume: './resumes/aironas_bilevicius.pdf',
                            linkedin: "aironasbilevicius",
                            email: 'aironas@colostate.edu',
                            text: "I am a senior in Electrical Engineering. I am currently interested in power systems, but I am open to exploring all of the different fields that Electrical Engineering has to offer. Outside of school, I like to go to the gym, play video games, build Lego, and have a good social life."
                        },
                        {
                            title: 'Samuel Peccoud',
                            src: require('@/assets/year3/headshots/samuel_peccoud.jpeg'),
                            resume: './resumes/samuel_peccoud.pdf',
                            linkedin: "samuel-peccoud",
                            email: 'speccoud@colostate.edu',
                            text: "I'm Samuel, a senior in Computer Engineering with a minor in Machine Learning. I'm normally found comparing ML models and diving into the world of algorithms and code. In my free time, I head to the local climbing gym to send boulder problems and routes. I love a good challenge."
                        },
                        {
                            title: 'Kaitlin Rentmeester',
                            src: require('@/assets/year3/headshots/kaitlin_rentmeester.jpg'),
                            linkedin: "kaitlin-rentmeester-180033233",
                            email: 'rentmeester.kaitlin@gmail.com',
                            text: "I am a senior in Computer Engineering with a minor in Computer Science. I am interested in machine learning, software development, and embedded systems. In my free time, I can often be found painting, reading mystery novels, or delving into my favorite true crime podcasts."
                        },
                        {
                            title: 'Lawrence Milo',
                            src: require('@/assets/year3/headshots/lawrence_milo.jpg'),
                            linkedin: "lawrence-milo",
                            text: "I am a senior in Computer Engineering with a minor in Computer Science. I am interested in software development and the design and implementation of embedded systems. Outside of work, I enjoy playing video games, listening to music, and playing with my dog, Rocket."
                        },
                        {
                            title: 'McKenzy Johnson',
                            src: require('@/assets/year3/headshots/mckenzy_johnson.png'),
                            resume: './resumes/mckenzy_johnson.pdf',
                            linkedin: "mckenzy-johnson-2881751a5",
                            email: 'mckenzypaige@gmail.com',
                            text: "I am a junior in Computer Engineering with a minor in Machine Learning. I am pursuing a career in embedded systems and integrating AI to improve and develop effective airborne and defense technology. In my free time, I enjoy hiking, spearfishing, soccer, snowboarding, and generally being outdoors."
                        },
                        {
                            title: 'Jacob Beauchamp',
                            src: require('@/assets/year3/headshots/jacob_beauchamp.png'),
                            resume: './resumes/jacob_beauchamp.pdf',
                            linkedin: "jacob-beauchamp-2002",
                            email: 'jacobbeauchamp2020@gmail.com',
                            text: "Hi everyone! I am a senior in Mechanical Engineering. I am very passionate about controls engineering and 3D design!"
                        },
                        {
                            title: 'Caleb Costigan',
                            src: require('@/assets/year3/headshots/caleb_costigan.jpg'),
                            resume: './resumes/caleb_costigan.pdf',
                            email: 'calebcostigan@gmail.com',
                            text: "My name is Caleb and I am a mechanical engineering major. I mainly specialize in SolidWorks CAD design, but I also have experience with FEA, CFD, and machining!"
                        },
                        {
                            title: 'Josiah Aldridge',
                            src: require('@/assets/year3/headshots/josiah_aldridge.jpg'),
                            email: 'josaldridge7@gmail.com',
                            text: "I'm a senior in Mechanical Engineering. I like reading lengthy novels in my spare time, as well as TTRPGs."
                        }
                    ],
                    vips: [
                        {
                            title: 'Joey Reback',
                            src: require('@/assets/year3/headshots/joey_reback.jpg'),
                            linkedin: "joseph-reback-54327b250",
                            email: 'jreback@colostate.edu',
                            text: "I'm a sophomore in Computer Engineering at CSU. I'm interested in working in robotics, aerospace, and embedded systems. I'm a huge Colorado sports fan and in my free time I like running, electronics repair, and backpacking."
                        },
                    ],
                    advisor: 'Olivera Notaros',
                    industryMembers: ['Jon Lotz', 'Bill Hudson', 'Hugh Wallace'],
                    teamImage: require('@/assets/year3/team/year3_full.jpg')
                },
                {
                    title: '2022/2023',
                    seniors: [
                        {
                            title: 'Michael Bearly',
                            src: require('@/assets/year2/michael_bearly.jpg'),
                            text: "I am a senior majoring in Electrical Engineering with a minor in Machine Learning. I am currently interning on the Workstations team at Hewlett Packard and hope to start my career there. In my free time I like running, hammocking, working with electronics, and blacksmithing."
                        },
                        {
                            title: 'Kyle Biskupski',
                            src: require('@/assets/year2/kyle_biskupski.jpg'),
                            text: "I am a senior in Electrical Engineering at Colorado State University. I enjoy learning how sensors work and integrating them into a system with microcontrollers to solve problems."
                        },
                        {
                            title: 'Evan Hassman',
                            src: require('@/assets/year2/evan_hassman.jpg'),
                            linkedin: "evan-hassman-75a091251",
                            text: "I am a senior in Computer Engineering with a minor in Computer Science. I am interested in computer architecture, software, and IoT devices. In my spare time I watch Movies, build Legos, and play video games while trying to live a healthy lifestyle."
                        },
                        {
                            title: 'Alex Kolodzik',
                            src: require('@/assets/year2/alex_kolodzik.jpg'),
                            linkedin: "alex-kolodzik-029",
                            text: "I am a senior majoring in Electrical Engineering as well as the co-captain of the Rambots senior design project. I am interested hardware design and hope to work in the robotics field. I volunteer with Outreach, and I am currently in the process of building my second Iron Man Helmet for them."
                        },
                        {
                            title: 'Kyle Moore',
                            src: require('@/assets/year2/kyle_moore.jpg'),
                            linkedin: "kyle-moore-8a7189222",
                            text: "My name is Kyle Moore and I am a fifth year Mechanical Engineering student. I am interested in the aerospace field, specifically in the design space and review of physics for designs. Away from school I work as a bartender, and in my free time I like to play/watch hockey. Go Avs!"
                        },
                        {
                            title: 'Eric Olson',
                            src: require('@/assets/year2/eric_olson.jpg'),
                            text: "I am a senior in mechanical engineering with a minor in mathematics. I'm interested in all things tech and renewable energy. I'm also a big Avalanche and Broncos fan."
                        },
                        {
                            title: 'Eric Percin',
                            src: require('@/assets/year2/eric_percin.jpg'),
                            linkedin: "eric-percin-044a13215",
                            text: "I am a senior majoring in Computer Engineering with a minor in Mathematics. I am interested in hardware-software codesign and hope to work in embedded systems. My hobbies include working with computers, cycling, and esports."
                        },
                        {
                            title: 'Gwyn Tari',
                            src: require('@/assets/year2/gwyn_tari.jpg'),
                            linkedin: "gwyndolyn-tari-278946215",
                            text: "I am a senior computer engineering student. I am interested in control systems and robotics. I am also a RamBOTs co-captain, vice president for CSU's chapter of IEEE-HKN, president of ECE outreach, and an ENpower mentor."
                        },
                        {
                            title: 'Thomas Veldhuizen',
                            src: require('@/assets/year2/thomas_veldhuizen.png'),
                            text: "I am a senior in Computer Engineering with a minor in computer science. I am interested in embedded systems and information security. My hobbies are hiking and traveling, I also like to box."
                        },
                    ],
                    vips: [
                        {
                            title: 'Anna Biolchini',
                            src: require('@/assets/year2/anna_biolchini.jpg'),
                            linkedin: "anna-biolchini-4824a224b",
                            text: "I am a 3rd year Electrical Engineering student and I have an interest in robotics and aerospace. In my free time I like to hike, read, and try new things."
                        },
                        {
                            title: 'Joey Reback',
                            src: require('@/assets/year2/joey_reback.jpg'),
                            linkedin: "joseph-reback-54327b250",
                            text: "My name is Joey Reback and I'm a first year computer engineer major. I'm interested in working with robotics, programming, and hope to work in research and development. In my free time I like running, electronics repair, and backpacking. "
                        },
                    ],
                    advisor: 'Olivera Notaros',
                    industryMembers: ['Jon Lotz', 'Bill Hudson', 'Hugh Wallace'],
                    teamImage: require('@/assets/year2/team_full.jpg')
                },
                {
                    title: '2021/2022',
                    seniors: [
                        {
                            title: 'Kristopher Alquist',
                            src: require('@/assets/year1/kristopher_alquist.jpg'),
                            text: "I am a fourth-year Computer Engineering student. I am interested in embedded systems, VLSI design, artificial intelligence, and machine learning. I have a passion for solving problems in resource limited environments and hope to contribute to future spacecraft designs."
                        },
                        {
                            title: 'Jared Davis',
                            src: require('@/assets/year1/jared_davis.jpg'),
                            text: "Senior Bachelor of Science in Electrical Engineering with a minor in Japanese. Research experience at CSU's Powerhouse Campus in DC-DC power distribution. Planning on going to graduate school in Japan and become an international engineer. Interested in Renewable Power."
                        },
                        {
                            title: 'Craig Olson',
                            src: require('@/assets/year1/craig_olson.jpg'),
                            text: "I am a senior at Colorado State University Studying Electrical Engineering. I'm planning on pursuing a career in renewable energy or circuit design."
                        },
                        {
                            title: 'Devin Pohl',
                            src: require('@/assets/year1/devin_pohl.jpg'),
                            text: "Senior year Computer Engineering student. Software developer at Microsoft. Interests in low-level programming, compilers, and process improvement. Hobbies include contributing to open source software, engineering vintage electronics, and configuring Emacs."
                        },
                        {
                            title: 'Oscar Coronado Rosales',
                            src: require('@/assets/year1/oscar_coronado_rosales.jpg'),
                            text: "Oscar Coronado Rosales is an Electrical Engineering student with an interest in Robotics, Control Systems, and Power systems / electronics. His hobbies include being hanging out with friends, learning new programming languages, and simply relaxing after doing schoolwork."
                        },
                        {
                            title: 'Ritwik Vadapally',
                            src: require('@/assets/year1/ritwik_vadapally.jpg'),
                            text: "I am senior majoring in Electrical Engineering with a minor in Mathematics. I am interested in pursuing a career in Embedded Systems, Machine Learning, or Control Systems. I am very interested in the automotive industry and in my free time I like to see new places and listen to music."
                        },
                        {
                            title: 'Thomas Veldhuizen',
                            src: require('@/assets/year1/thomas_veldhuizen.jpg'),
                            text: "I am a fourth year majoring in Computer Engineering with a minor in Computer Science. I would like to pursue a career in cyber security or in secure hardware design. My hobbies include learning new languages, programming or otherwise and practicing music."
                        },
                        {
                            title: 'Alex Kolodzik',
                            src: require('@/assets/year2/alex_kolodzik.jpg'),
                            text: "Alex Kolodzik is a junior at CSU pursuing an electrical engineering degree. He has a passion for robots and his passion project is building his own functioning Iron Man Helmet."
                        },
                        {
                            title: 'Gwyn Tari',
                            src: require('@/assets/year2/gwyn_tari.jpg'),
                            text: "Third year computer engineering student. Senior design VIP student. ECE outreach student and ENpower Engineering mentor."
                        },
                    ],
                    vips: [],
                    advisor: 'Olivera Notaros',
                    industryMembers: ['David Farrell', 'Ian Bernstein'],
                    teamImage: require('@/assets/year1/team_full.jpg')
                }
            ]
        }
    },
}
</script>
