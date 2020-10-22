<template>
  <div id="app">
     <router-link to="/">Contact List</router-link>
      <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.modal{
	position: fixed;
	z-index: 99999;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background: rgba(0,0,0, 0.8);
	overflow-y: auto;
}

.modalContainer{
	width: 95%;
	max-width: 960px;
	background: #fff;
	margin: 99px auto;
}

.modalHeader{
	min-height: 22px;
	background: #e3e3e3;
	font-size: 22px;
	padding: 11px;
}

p.modalClose{
	background: #e46a6a;
    display: inline-block;
    padding: 3px 6px;
    color: #fff;
    font-size: 12px;
    border-radius: 14px;
    margin-top: 2px;
    cursor: pointer;
}

p.modalClose:hover{
	background: red;
}

.modalContent{
	min-height: 88px;
	background: #fff;
	padding: 44px;
}

.modalFooter{
	min-height: 22px;
	background: #e3e3e3;
	font-size: 22px;
	padding: 11px;
}
table.nice-table{
	width: 100%;
}

table.nice-table tr:nth-child(2n+1){
	background: #f7f7f7;
}

table.nice-table tr th, table.nice-table tr td, td{
	padding: 9px;
}

table.nice-table tr th{
	background: #9c69a0;
	color: #fff;
	text-align: left;
}
</style>
