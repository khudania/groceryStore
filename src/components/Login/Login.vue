<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-card class="pa-5 mt-10 elevation-8">
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <!-- <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field> -->

              <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                label="Password"
                hint="At least 8 characters"
                counter
                @click:append="show1 = !show1"
              ></v-text-field>

              <!-- <v-select
                v-model="select"
                :items="items"
                :rules="[v => !!v || 'Item is required']"
                label="Item"
                required
              ></v-select>-->

              <!-- <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
              ></v-checkbox>-->

              <!-- <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn> -->

              <!-- <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn> -->

              <v-btn color="success">Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="1"></v-col>
      <v-col cols="12" md="5">
        <Logimg />
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./login.js">
</script>