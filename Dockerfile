# Intermediate
FROM hastore-nodejs-build-env AS hastore-nodejs-admin-build-env
ADD . $SRCBASE/admin
RUN cd $SRCBASE/admin && npm run build

# Final
FROM scratch
COPY --from=hastore-nodejs-admin-build-env /dist/admin /dist/admin 
