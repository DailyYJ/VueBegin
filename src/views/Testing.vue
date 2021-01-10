<template>
  <div>
    <h1>Welcome to Testing Page! {{title}}</h1>
    <input type="text" v-model="input1" />
	<button type="button" @click="getData">Get</button>
	<button type="button" @click="setData">Set</button>
	<select class="form-control" v-model="region" @change="changeRegion">
		<option :key="i" :value="d.v" v-for="(d,i) in options">{{d.t}}</option>
	</select>
	
	<table class="table table-bordered" v-show="tableShow">
		<tr :key="i" v-for="(d,i) in options">
		<td>{{d.v}}</td>
		<td>{{d.t}}</td>
		</tr>
	</table>
  </div>
</template>

<script>
export default {
	data() {
			return {
			title: "",
			title2: "Seoul",
			input1: "Default Data",
			options: [
				{v:"S", t:"Seoul"},
				{v:"D", t:"Daegu"},
				{v:"B", t:"Busan"},
				{v:"Nov", t:"YJ"},
			],
			region: "B",
			tableShow: true,
		};
	},
	watch:{
		input1(){
			console.log(this.input1);
		},
		title(){

		}
	},
	methods:{
		getData()	{
			alert(this.input1);
		},
		setData(){
			this.input1 = "SettingData";
		},
		changeRegion(){
			alert(this.region);
		},
	},
	/* beforeCreate(){
		console.log("beforeCreate")
	},
	created(){
		console.log("created")
	},
	beforeMount(){
		console.log("beforeMount")
	},
	mounted(){
		console.log("mounted")
	},
	beforeUpdate(){
		console.log("beforeUpdate")
	},
	updated(){
		console.log("updated")
	},
	beforeDestroy(){
		console.log("beforeDestroy")
	},
	destroyed(){
		console.log("destroyed")
	}, */
};
</script>