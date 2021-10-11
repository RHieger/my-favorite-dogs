const testString = '';

const genRegex = /[a-zA-Z0-9]/;

if (
  ! genRegex.test(testString)
) {
  console.log('\nNothing has been submitted!\n');
}
