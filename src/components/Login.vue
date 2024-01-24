<script>
export default {
    data: () => ({        step: 1,    }),
    computed: {
        currentTitle() {
            switch (this.step) {
                case 1: return 'Registrace noveho uzivatele '
                case 2: return 'Create a password'
                default: return 'Account created'
            }
        },
    },
}
</script>





<script setup>
import { reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
// import { sameAs } from '@vuelidate/validators'
import { email, required ,numeric} from '@vuelidate/validators'

const initialState = {
    email: '',
    password:'',
  name: '',
  select: null,
  mobil:''
//   checkbox: null,
}

const state = reactive({  ...initialState,})

﻿
const items = Array.from({ length: 13 }, (v, i) =>  i + 1);


const rules = {
   email: { required, email },
   password:{required},
   name: { required },
   select: { required },
   mobil: { required, numeric },
}

const v$ = useVuelidate(rules, state)

function clear () {
  v$.value.$reset()

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value
  }
}
</script>








<template>
    <v-card class="mx-auto" max-width="500">
        <v-card-title class="text-h6 font-weight-regular justify-space-between">
            <span>{{ currentTitle }}</span>
            <v-avatar color="primary" size="24" ></v-avatar>
            {{ this.step }}
        </v-card-title>
        <form>

        <v-window v-model="step">
            <v-window-item :value="1">
                <v-card-text>
                    
                    <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)" label="E-mail" required             @input="v$.email.$touch" @blur="v$.email.$touch"></v-text-field>
                    <v-text-field label="Password" type="password"></v-text-field>
                    <v-text-field label="Confirm Password" type="password"  v-if="true"></v-text-field>

                    <!-- <v-text-field label="Email" placeholder="john@google.com"></v-text-field> -->
                    <!-- <span class="text-caption text-grey-darken-1">                           This is the email you will use to login to your Vuetify account</span> -->
                </v-card-text>
            </v-window-item>

            <v-window-item :value="2">
                <v-card-text>

                    <v-text-field v-model="state.name" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="10" label="Jak se jmenujete?"             required @input="v$.name.$touch" @blur="v$.name.$touch"></v-text-field>
                    <v-text-field v-model="state.mobil" :error-messages="v$.name.$errors.map(e => e.$message)" :counter="10" label="Telefon:"             required @input="v$.name.$touch" @blur="v$.name.$touch"></v-text-field>
                    <v-select v-model="state.select" :items="items" :error-messages="v$.select.$errors.map(e => e.$message)"            label="Ze ktereho jste bytu? " required @change="v$.select.$touch" @blur="v$.select.$touch"></v-select>

                    
                    <!-- <v-checkbox v-model="state.checkbox" :error-messages="v$.checkbox.$errors.map(e => e.$message)"             label="Jste vlastnik bytu??" required @change="v$.checkbox.$touch" @blur="v$.checkbox.$touch"></v-checkbox> -->





                    <!-- <v-text-field label="Password" type="password"></v-text-field>
                    <v-text-field label="Confirm Password" type="password"></v-text-field>
                    <span class="text-caption text-grey-darken-1">                        Please enter a password for your account                    </span> -->
                </v-card-text>
            </v-window-item>

            <v-window-item :value="3">
                <div class="pa-4 text-center">
                    
                    <h3 class="text-h6 font-weight-light mb-2">
                        Welcome to Vuetify
                    </h3>
                    <span class="text-caption text-grey">Thanks for signing up!</span>
                </div>
            </v-window-item>
        </v-window>
    </form>
        <v-divider></v-divider>

        <v-card-actions>
            <v-btn v-if="step > 1" variant="text" @click="step--">
                Back
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn v-if="step < 3" color="primary" variant="flat" @click="step++">
                Next
            </v-btn>
        </v-card-actions>
    </v-card>

<div>

   




<!-- 


        <v-btn class="me-4" @click="v$.$validate">
            submit
        </v-btn>
        <v-btn @click="clear">
            clear
        </v-btn> -->
    


</div>



</template>





