<template>
  <v-card>
    <v-card-title>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-text-field v-model="search" append-icon="mdi-magnify" label="搜索" single-line hide-details></v-text-field>
    </v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="tickets"
        :search="search"
        :loading="loading"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
      >
        <template v-slot:item.action="{ item }">
          <v-btn small :disabled="item.is_end" color="error" @click="deleteTicket(item)">删除</v-btn>
        </template>
        <template v-slot:item.show="{ item }">
          <v-btn color="primary" small @click="showTicket(item)">查看流程</v-btn>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        { text: "ID", value: "id", sortable: true },
        { text: "流水号", value: "sn" },
        { text: "申请类型", value: "workflow.name" },
        { text: "标题", value: "title" },
        { text: "状态", value: "state.name" },
        { text: "创建人", value: "creator" },
        { text: "创建日期", value: "created" },
        { text: "修改日期", value: "modified" },
        { text: "处理类型", value: "participant_type" },
        { text: "处理人", value: "participant" },
        { text: "父流程", value: "parent_ticket.sn" },
        { text: "父流程状态", value: "parent_ticket_state" },
        { text: "操作", value: "action", sortable: false },
        { text: "查看流程", value: "show", sortable: false }
      ],
      tickets: [],
      loading: false,
      sortBy: "id",
      sortDesc: true
    };
  },
  mounted() {
    this.listTicket();
  },
  methods: {
    listTicket() {
      let self = this;
      self.loading = true;
      // fxr friend
      // 下面两行是刚加的筛选的
      let params = {
        category: "owner"
      };
      this.$api.ListTicket(params).then(function(response) {
        self.loading = false;
        self.tickets = response.result;
      });
    },
    deleteTicket(item) {
      let self = this;
      const index = this.tickets.indexOf(item);
      confirm("确定要删除流程'" + item.sn + "'吗?") &&
        this.$api.DeleteTicket(item.id).then(function(response) {
          self.$message.success("删除流程'" + item.sn + "'成功!");
          self.listTicket();
        });
    },
    showTicket(item) {
      this.$router.push("/ticket/detail/" + item.id);
    }
  }
};
</script>

<style></style>
