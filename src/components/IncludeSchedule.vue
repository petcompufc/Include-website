<style scoped>

</style>

<template>
  <section>
    <table>
      <tr>
        <th>Horário</th>
        <th>Atividade</th>
      </tr>

      <tr
        v-for="rout in routine"
        :key="rout.id"
      >
        <td>{{ rout.hour }}</td>
        <td>{{ rout.activity }}</td>
      </tr>
    </table>
  </section>
</template>

<script>

export default {
  props: {
    routine: {
      type: Array,
      required: true,
    },
  },
};
</script>
