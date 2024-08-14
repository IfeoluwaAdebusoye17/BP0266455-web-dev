export let program = [{
  courseId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  courseId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

export function selectProgram(courseId) {
  program[0] = {
    courseId: courseId,
    quantity: 1
  };
  console.log(program);
}

