<template>
    <div>
        <h1>hello world</h1>
        <v-btn depressed elevation="2" icon outlined plain></v-btn>
        <div class="text-center">
            <v-btn class="mx-2" fab dark small color="primary">
                <v-icon dark>mdi-minus</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark small color="pink">
                <v-icon dark>mdi-heart</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark color="indigo">
                <v-icon dark>mdi-plus</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark color="teal">
                <v-icon dark>mdi-format-list-bulleted-square</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark large color="cyan">
                <v-icon dark>mdi-pencil</v-icon>
            </v-btn>

            <v-btn class="mx-2" fab dark large color="purple">
                <v-icon dark>mdi-android</v-icon>
            </v-btn>
        </div>
        <template>
            <v-card :loading="loading" class="mx-auto my-12" max-width="374">
                <template slot="progress">
                    <v-progress-linear
                        color="deep-purple"
                        height="10"
                        indeterminate
                    ></v-progress-linear>
                </template>

                <v-img
                    height="250"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>

                <v-card-title>Cafe Badilico</v-card-title>

                <v-card-text>
                    <v-row align="center" class="mx-0">
                        <v-rating
                            :value="4.5"
                            color="amber"
                            dense
                            half-increments
                            readonly
                            size="14"
                        ></v-rating>

                        <div class="grey--text ms-4">4.5 (413)</div>
                    </v-row>

                    <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

                    <div>
                        Small plates, salads & sandwiches - an intimate setting with 12 indoor seats
                        plus patio seating.
                    </div>
                </v-card-text>

                <v-divider class="mx-4"></v-divider>

                <v-card-title>Tonight's availability</v-card-title>

                <v-card-text>
                    <v-chip-group
                        v-model="selection"
                        active-class="deep-purple accent-4 white--text"
                        column
                    >
                        <v-chip>5:30PM</v-chip>

                        <v-chip>7:30PM</v-chip>

                        <v-chip>8:00PM</v-chip>

                        <v-chip>9:00PM</v-chip>
                    </v-chip-group>
                </v-card-text>

                <v-card-actions>
                    <v-btn color="deep-purple lighten-2" text @click="reserve">Reserve</v-btn>
                </v-card-actions>
            </v-card>
        </template>
    </div>
</template>

<script>
export default {
    name: "App",

    components: {},

    data: () => ({
        //
    }),
};
</script>
