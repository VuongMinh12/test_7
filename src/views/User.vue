<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <b-table>
    <tr>
      <td>ID</td>
      <td>Age</td>
      <td>FirstName</td>
      <td>LastName</td>
      <td>Show data with modal</td>
      <td>Show data with router-link</td>
      <td>Edit data</td>
      <td>Delete data</td>
    </tr>
    <tr v-for="(item, d) in items" :key="d">
      <td v-text="item.id"></td>
      <td v-text="item.age"></td>
      <td v-text="item.first_name"></td>
      <td v-text="item.last_name"></td>
      <td>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          @click="showDetails(item)"
        >
          Show User
        </button>
      </td>
      <td>
        <button>
          <router-link :to="`/userdetail/${item.id}`"> Show</router-link>
        </button>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#ModalEdit"
          @click="EditUser(item)"
        >
          Edit User
          <i class="fas fa-pen"></i>
        </button>
      </td>
      <td>
        <button class="btn btn-xs btn-danger" @click="deleteEvent(d)">
          Delete
        </button>
      </td>
    </tr>
  </b-table>
  <!-- Modal Show-->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">
            {{ currentItemm.first_name }} {{ currentItemm.last_name }}
          </h1>
          <!-- <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button> -->
        </div>
        <div class="modal-body">
          <div>ID: {{ currentItemm.id }}</div>
          <div>AGE: {{ currentItemm.age }}</div>
          <div>FIRST NAME: {{ currentItemm.first_name }}</div>
          <div>LAST NAME: {{ currentItemm.last_name }}</div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal Edit -->
  <div
    class="modal fade"
    id="ModalEdit"
    tabindex="-1"
    aria-labelledby="ModalEditLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="ModalEditLabel">
            Edit User: {{ currentItemm.first_name }}
            {{ currentItemm.last_name }}
          </h1>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label class="control-label">Age </label>
            <input
              type="text"
              name="age"
              v-model="age"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label class="control-label">First Name</label>
            <input
              type="text"
              name="firstname"
              v-model="first_name"
              class="form-control"
              required
            />
          </div>
          <div class="form-group">
            <label class="control-label">Last Name</label>
            <input
              type="text"
              name="lastname"
              v-model="last_name"
              class="form-control"
              required
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            data-bs-dismiss="modal"
            @click="onUpdate()"
            class="btn btn-primary"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      modalData: null,
      items: [
        { id: 1, age: 40, first_name: "Dickerson", last_name: "Macdonald" },
        { id: 2, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { id: 3, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { id: 4, age: 38, first_name: "Jami", last_name: "Carney" },
        { id: 5, age: 84, first_name: "Edward", last_name: "Macdonald" },
        { id: 6, age: 32, first_name: "Jamid", last_name: "Carneyty" },
        { id: 7, age: 81, first_name: "Genevaa", last_name: "Wilsonti" },
        { id: 8, age: 35, first_name: "Jamni", last_name: "Carnad" },
        { id: 9, age: 86, first_name: "Genevadi", last_name: "Wilton" },
        { id: 10, age: 33, first_name: "Jamice", last_name: "Carneye" },
      ],
      item: { id: "", age: "", first_name: "", last_name: "" },
      currentItemm: { id: "", age: "", first_name: "", last_name: "" },
    };
  },
  methods: {
    showDetails(item) {
      this.currentItemm = item;
    },
    EditUser(d) {
      this.currentItemm = d;
      this.age = d.age;
      this.first_name = d.first_name;
      this.last_name = d.last_name;
    },
    onUpdate: function () {
      const index = this.items.findIndex(
        (item) => item.id === this.currentItemm.id
      );
      if (index !== -1) {
        this.items[index] = {
          ...this.currentItemm,
          age: this.age,
          first_name: this.first_name,
          last_name: this.last_name,
        };
      }
    },
    deleteEvent: function (d) {
      this.items.splice(d, 1);
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
table,
td {
  border: 1px solid;
  padding: 20px;
  text-align: left;
}
template {
  margin: 1%;
}
a:link {
  text-decoration: none;
  color: black;
}

a:visited {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: none;
  color: black;
}

a:active {
  text-decoration: none;
  color: black;
}
</style>
